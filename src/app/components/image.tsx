import Image from 'next/image';
import { ImageProps } from '@/app/interfaces/imageprops';

const ImageComponent = ({ src, alt, className, quality = 75 }: ImageProps) => {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                quality={quality}
                width={500}
                height={500}
                priority={true}
                className="rounded-lg object-cover"
                style={{ width: 'auto', height: '100%' }}
            />
        </div>
    );
};

export default ImageComponent;
