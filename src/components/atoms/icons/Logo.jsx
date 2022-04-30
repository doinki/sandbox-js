import Image from 'next/image';

/**
 * @param {Omit<import('next/image').ImageProps, 'src'>} props
 */
const Logo = (props) => {
  return (
    <Image
      alt="Logo"
      height={64}
      src="/logo.png"
      width={64}
      unoptimized
      {...props}
    />
  );
};

export default Logo;
