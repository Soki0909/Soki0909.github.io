---
name: animation-design
description: |
  デザイン・アニメーション専門家として、Webアニメーションの設計・実装・レビューを行うスキル。
  「くどくない」アニメーションの原則と具体的な実装パターンを提供する。
---

# Animation & Design Expert Skill

## 概要

このスキルは、Webアニメーション設計の専門家スキルです。

---

## 1. アニメーション設計の4原則

### 原則1: transform + opacity のみアニメーション（最重要）

```css
/* ✅ GPU合成レイヤーで処理 → コマ落ちなし */
.good {
  transition:
    transform 0.55s,
    opacity 0.55s;
}

/* ❌ レイアウト再計算が発生 → パフォーマンス悪化 */
.bad {
  transition:
    width 0.55s,
    height 0.55s,
    margin 0.55s;
}
```

**理由**: `transform` と `opacity` のみがGPU合成レイヤーで処理される。`width`, `height`, `top`, `left`, `margin`, `padding` などはレイアウト再計算を引き起こす。

### 原則2: カスタム cubic-bezier で自然な動き

```css
/* 標準イージング: 自然な減速感（ease-outの変形） */
transition: transform 0.55s cubic-bezier(0, 0.15, 0.25, 0.99);

/* 映画的イージング: 終盤の減衰が特に滑らか */
animation: eyeTop 0.6s cubic-bezier(0, 0, 0.11, 0.99);
```

| イージング                          | 用途                               |
| ----------------------------------- | ---------------------------------- |
| `cubic-bezier(0, 0.15, 0.25, 0.99)` | カード・セクション・通常のUI遷移   |
| `cubic-bezier(0, 0, 0.11, 0.99)`    | 映画的なトランジション・まぶた演出 |

### 原則3: 一度きりの発火（IntersectionObserver）

```typescript
// ✅ 一度発火後に監視解除 → メモリリーク防止
const observer = new IntersectionObserver(
  (changes) => {
    changes.forEach((change) => {
      if (change.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // 一度だけ発火
      }
    });
  },
  { rootMargin: '0px 0px -100px 0px' }
); // 画面下端より100px手前で発火
```

**rootMarginの設定**: `-100px` 〜 `-200px` で「待ちを感じさせない」早めの発火を実現。

### 原則4: duration は 0.4s 〜 0.6s の範囲

| 用途                             | duration         | 理由                     |
| -------------------------------- | ---------------- | ------------------------ |
| ノード・アイコンのポップイン     | `0.4s`           | 小さい要素は短く         |
| カード・セクションのフェードイン | `0.55s`          | 素早すぎず、もたつかない |
| 区切り線・大きな要素             | `0.6s`           | 大きい要素は少し長く     |
| 映画的トランジション             | `0.6s` 〜 `1.0s` | 演出として意図的に長く   |

---

## 2. 実装パターン集

### パターン1: テキストスライドイン

```css
/* 親要素に overflow: hidden を設定 */
.text-wrapper {
  overflow: hidden;
}

/* 子要素が下から滑り出る */
@keyframes slideUpClip {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text {
  animation: slideUpClip 0.55s cubic-bezier(0, 0.15, 0.25, 0.99) both;
}
```

**用途**: セクション見出し、ヒーローテキスト

### パターン2: ノード・アイコンのポップイン

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.icon {
  animation: scaleIn 0.4s cubic-bezier(0, 0.15, 0.25, 0.99) both;
}
```

**用途**: タイムラインノード、バッジ、アバター

### パターン3: スタッガー（段階的表示）

```tsx
// リストアイテムを時間差で表示
{
  items.map((item, index) => (
    <AnimatedSection
      key={item.id}
      animation="fade-up"
      delay={Math.min(index * 80, 400)} // 最大400msでキャップ
    >
      <Card item={item} />
    </AnimatedSection>
  ));
}
```

**ポイント**: `Math.min(index * 80, 400)` で遅延が無限に増えないようにキャップする。

### パターン4: ホバーオーバーレイ（グラデーション）

```tsx
// ✅ opacity のみ変化（transform/opacity 原則を守る）
<div className="relative group">
  <img src={image} />
  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[550ms]"
    style={{
      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
    }}
  />
</div>
```

**用途**: ギャラリーカード、ポートフォリオサムネイル

### パターン5: 横線の伸長エフェクト

```css
@keyframes wipeIn {
  from {
    transform: scaleX(0);
    opacity: 0;
  }
  to {
    transform: scaleX(1);
    opacity: 1;
  }
}

.divider {
  animation: wipeIn 0.6s cubic-bezier(0, 0.15, 0.25, 0.99) both;
  transform-origin: left; /* 左から右へ伸びる */
}
```

**用途**: セクション区切り線、プログレスバー

---

## 3. アンチパターン（やってはいけないこと）

### ❌ filter: blur() のアニメーション

```css
/* ❌ ペイントレイヤーで処理 → 毎フレーム再描画 */
@keyframes blurIn {
  from {
    filter: blur(12px);
  }
  to {
    filter: blur(0);
  }
}

/* ✅ 代替: 2枚のぼかし画像を opacity で切り替え */
.blur-weak {
  filter: blur(4px);
  animation: fadeOut 1s;
}
.blur-strong {
  filter: blur(12px);
  animation: fadeIn 1s;
}
```

### ❌ アニメーションの多用

- 1ページに3種類以上のアニメーションパターンを使わない
- ループアニメーションは背景装飾のみに限定
- ユーザー操作（hover/click）以外でループするアニメーションは避ける

### ❌ 長すぎる duration

- `1.0s` を超えるアニメーションは「もたつき感」を生む
- 例外: 意図的な映画的演出（オープニングアニメーション等）

---

## 4. このプロジェクトの実装状況

### 使用中のキーフレーム（`src/index.css`）

| キーフレーム  | 用途                     | duration |
| ------------- | ------------------------ | -------- |
| `fadeInUp`    | ヘッダー要素・セクション | `0.55s`  |
| `slideUpClip` | テキストスライドイン     | `0.55s`  |
| `scaleIn`     | SignalNodeポップイン     | `0.4s`   |
| `wipeIn`      | 区切り線伸長             | `0.6s`   |

### 使用中のユーティリティクラス

| クラス                   | 説明                           |
| ------------------------ | ------------------------------ |
| `.animate-fade-in-up`    | ヘッダー要素（ページロード時） |
| `.animate-slide-up-clip` | テキストスライドイン           |
| `.animate-scale-in`      | SignalNodeアイコン             |
| `.animate-wipe-in`       | 横線伸長                       |

### `AnimatedSection` コンポーネントのアニメーション種別

| animation prop             | 用途                                    |
| -------------------------- | --------------------------------------- |
| `fade-up`                  | セクション全体（デフォルト）            |
| `fade-in`                  | フェードのみ                            |
| `fade-left` / `fade-right` | 横方向スライド                          |
| `scale`                    | スケールイン                            |
| `slide-up-clip`            | テキストクリップ（overflow:hidden必須） |

---

## 5. デザイン判断の基準

アニメーションを追加・変更する際は以下の質問に答える:

1. **必要性**: このアニメーションはUXを向上させるか？ 単なる装飾ではないか？
2. **パフォーマンス**: `transform` / `opacity` のみか？ `filter: blur()` を使っていないか？
3. **くどさ**: 同じ画面に何種類のアニメーションがあるか？ 3種類以下か？
4. **duration**: `0.4s` 〜 `0.6s` の範囲に収まっているか？
5. **一度きり**: スクロールアニメーションは `once: true` で一度だけ発火するか？
