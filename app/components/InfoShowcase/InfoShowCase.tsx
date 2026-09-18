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

        <div className="bg-primary text-white p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className=" cursor-pointer flex items-center gap-2 hover:text-secondary transition-all duration-300">
                        <Mail />
                        <p className="">
                            dasdsa@gmail.com
                        </p>
                    </div>
                    <div className="">
                        <p>Free Home Delivery All Over Pakistan</p>
                    </div>
                    <div className=" flex items-center gap-4 ">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-secondary transition-all duration-300"
                            >
                                <p>{social.name}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </div>

    )
}
