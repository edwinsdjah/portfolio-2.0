import React from 'react';
import { SocialIcon } from 'react-social-icons';

interface SocialsProps {
    className: string;
}

const Socials: React.FC<SocialsProps> = ({ className }) => {
    return (
        <div className="flex md:flex-row gap-4">
            <SocialIcon
                url="https://linkedin.com/in/edwinsdjah"
                bgColor="#000"
                fgColor="#fff"
                className={className}
            />
            <SocialIcon
                url="https://github.com/edwinsdjah"
                bgColor="#000"
                fgColor="#fff"
                className={className}
            />
            <SocialIcon
                url="https://instagram.com/edwinsjah"
                bgColor="#000"
                fgColor="#fff"
                className={className}
            />
            <SocialIcon
                url="https://facebook.com/edwinsdjah"
                bgColor="#000"
                fgColor="#fff"
                className={className}
            />
        </div>
    );
};

export default Socials;
