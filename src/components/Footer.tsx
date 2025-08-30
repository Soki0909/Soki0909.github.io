import { getPersonalData } from '../utils/dataLoader';

const Footer = () => {
  const personalData = getPersonalData();
  const { basicProfile } = personalData;

  return (
    <footer className="bg-white mt-8 py-4 text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} {basicProfile.nameEn} (
        {basicProfile.name}). All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
