"use client";
import { useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import getUserCountry from "js-user-country";

import { useAppContext } from '../../context/AppContext';
import { isClient } from '@/utils/isClient';




// arrow function
const LikeButton = ({ projectTitle }: { projectTitle: string }): JSX.Element => {
    const [isLiked, setIsLiked] = useState(false);
    const { showFloatingHeart, setShowFloatingHeart } = useAppContext();

    // Check localStorage on component mount
    useEffect(() => {
        if (isClient()) {
            const liked = localStorage.getItem(`like_${projectTitle}`);
            if (liked) {
                setIsLiked(true);
            }
        }
    }, [projectTitle]);

    const handleLike = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!isLiked) {
            try {
                // Get browser information
                const baseUrl = process.env.NODE_ENV === 'production'
                ? 'https://www.ubaidismail.com'
                : ''; 
                const browserInfo = {
                    userAgent: isClient() ? window.navigator.userAgent : '',
                    language: isClient() ? window.navigator.language : '',
                    platform: isClient() ? window.navigator.platform : '',
                    timestamp: new Date().toISOString(),
                    projectTitle: projectTitle,
                    country: getUserCountry().name,
                    city: 'Unknown',
                    region: 'Unknown',
                    ip: 'Unknown'
                };

                // Send data to API route
                if (isClient()) {
                    localStorage.setItem(`like_${projectTitle}`, 'true');
                }
                setIsLiked(true);
                setShowFloatingHeart(true);
                setTimeout(() => {
                    setShowFloatingHeart(false);
                    // we need to set transiton to hide that

                }, 4000);
                const response = await fetch(`api/like-notification`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(browserInfo),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                  }
            } catch (error) {
                console.error('Error sending like notification:', error);
            }
        } else {
            if (isClient()) {

                localStorage.removeItem(`like_${projectTitle}`);
                setIsLiked(false);
            }
        }
    };


    return (
        <motion.div className='relative'>
            <motion.a
                onClick={handleLike}
                whileHover={{ scale: 1.1 }}
                className={`transition-colors duration-200 z-40 absolute right-6 top-8  ${isLiked ? 'text-red-500' : 'text-white hover:text-red-500'
                    }`}
            //   disabled={isLiked}
            >
                {isLiked ? <FaHeart /> : <FaRegHeart />}
                {/* display floading heart when someone liked and hide after 3sec */}
            </motion.a>

        </motion.div>
    );
};
export default LikeButton;
