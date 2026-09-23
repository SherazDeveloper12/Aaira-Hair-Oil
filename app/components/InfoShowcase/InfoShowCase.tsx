import React from 'react'
import Container from '../Container/Container'
import { Mail } from 'lucide-react'

export default function InfoShowCase() {
    const socials = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/yourpage",
            icon: "facebook-icon", // Replace with your actual icon component or image
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/yourprofile",
            icon: "instagram-icon", // Replace with your actual icon component or image
        },
        {
            name: "Youtube",
            url: "https://www.youtube.com/yourchannel",
            icon: "youtube-icon", // Replace with your actual icon component or image
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/yourwhatsappnumber",
            icon: "whatsapp-icon", // Replace with your actual icon component or image
        }

    ]
    return (

        <div className=" bg-primary text-white p-2 md:p-4">
            <Container>
                <div className=" flex justify-center md:justify-between items-center">
                    <div className="hidden md:flex  cursor-pointer items-center gap-2 hover:text-secondary transition-all duration-300">
                        <Mail className='size-4 md:size-6'/>
                        <p className="text-sm md:text-base ">
                            dasdsa@gmail.com
                        </p>
                    </div>
                    <div className="text-xs md:text-base">
                        <p>Free Home Delivery All Over Pakistan</p>
                    </div>
                    <div className=" hidden md:flex items-center gap-2 md:gap-4 ">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 md:gap-2 hover:text-secondary transition-all duration-300"
                            >
                                <p className="text-xs md:text-sm">{social.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>

    )
}
