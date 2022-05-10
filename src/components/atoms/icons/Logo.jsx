import Image from 'next/image';

/**
 * @param {Omit<import('next/image').ImageProps, 'alt' | 'src'>} props
 */
const Logo = ({ height = 64, width = 64, ...props }) => {
  return (
    <Image
      height={height}
      width={width}
      unoptimized
      {...props}
      alt="Logo"
      src="/logo.png"
    />
  );
};

export default Logo;
