import macbook1 from '../Components/Assets/macbook1.jpg'
import macbook2 from '../Components/Assets/macbook2.png'
import macbook3 from '../Components/Assets/macbook3.jpg'

import dellxps1 from '../Components/Assets/dellxps1.jpg'
import dellxps2 from '../Components/Assets/dellxps2.jpg'
import dellxps3 from '../Components/Assets/dellxps3.jpg'

import hpsx1 from '../Components/Assets/hpsx1.jpg'
import hpsx2 from '../Components/Assets/hpsx2.jpg'
import hpsx3 from '../Components/Assets/hpsx3.jpg'

import lenovo1 from '../Components/Assets/lenovo1.jpg'
import lenovo2 from '../Components/Assets/lenovo2.jpg'
import lenovo3 from '../Components/Assets/lenovo3.jpg'

import asus1 from '../Components/Assets/asus1.jpg'
import asus2 from '../Components/Assets/asus2.jpg'
import asus3 from '../Components/Assets/asus3.jpg'

import ps1 from '../Components/Assets/ps1.jpg'
import ps2 from '../Components/Assets/ps2.jpg'
import ps3 from '../Components/Assets/ps3.jpg'

import xbox1 from '../Components/Assets/xbox1.jpg'
import xbox2 from '../Components/Assets/xbox2.jpg'
import xbox3 from '../Components/Assets/xbox3.jpg'

import nintendo1 from '../Components/Assets/nintendo1.jpg'
import nintendo2 from '../Components/Assets/nintendo2.jpg'
import nintendo3 from '../Components/Assets/nintendo3.jpg'

import ps4_1 from '../Components/Assets/ps4_1.jpg'
import ps4_2 from '../Components/Assets/ps4_2.jpg'
import ps4_3 from '../Components/Assets/ps4_3.jpg'

import xboxS1 from '../Components/Assets/xboxS1.JPG'
import xboxS2 from '../Components/Assets/xboxS2.jpg'
import xboxS3 from '../Components/Assets/xboxS3.jpg'

import apple1 from '../Components/Assets/apple1.jpg'
import apple2 from '../Components/Assets/apple2.jpg'
import apple3 from '../Components/Assets/apple3.jpg'

import galaxy1 from '../Components/Assets/galaxy1.jpg'
import galaxy2 from '../Components/Assets/galaxy2.jpg'
import galaxy3 from '../Components/Assets/galaxy3.jpg'

import garmin1 from '../Components/Assets/garmin1.jpg'
import garmin2 from '../Components/Assets/garmin2.jpg'
import garmin3 from '../Components/Assets/garmin3.jpg'

import fossil1 from '../Components/Assets/fossil1.jpg'
import fossil2 from '../Components/Assets/fossil2.jpg'
import fossil3 from '../Components/Assets/fossil3.jpg'

import fitbit1 from '../Components/Assets/fitbit1.jpg'
import fitbit2 from '../Components/Assets/fitbit2.jpg'
import fitbit3 from '../Components/Assets/fitbit3.jpg'

import jbl1 from '../Components/Assets/jbl1.jpeg'
import jbl2 from '../Components/Assets/jbl2.jpg'
import jbl3 from '../Components/Assets/jbl3.jpg'

import sonos1 from '../Components/Assets/sonos1.jpg'
import sonos2 from '../Components/Assets/sonos2.jpg'
import sonos3 from '../Components/Assets/sonos3.jpg'

import bose1 from '../Components/Assets/bose1.jpg'
import bose2 from '../Components/Assets/bose2.jpg'
import bose3 from '../Components/Assets/bose3.jpg'

import echo1 from '../Components/Assets/echo1.jpg'
import echo2 from '../Components/Assets/echo2.jpg'
import echo3 from '../Components/Assets/echo3.jpg'

import marshall1 from '../Components/Assets/marshall1.jpg'
import marshall2 from '../Components/Assets/marshall2.jpg'
import marshall3 from '../Components/Assets/marshall3.jpg'

export const products = [
    // Laptops
    {
        id: 1,
        name: 'MacBook Pro',
        category: 'Laptops',
        price: 160000,
        images: [
            macbook1,
            macbook2,
            macbook3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: true,
        recommended: false,
        description: 'The MacBook Pro is a high-performance laptop designed for professionals and power users. It features a stunning Retina display, advanced processors, and up to 10 hours of battery life.'
    },
    {
        id: 2,
        name: 'Dell XPS 13',
        category: 'Laptops',
        price: 125000,
        images: [
            dellxps1,
            dellxps2,
            dellxps3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Dell XPS 13 is a compact and powerful laptop with a beautiful InfinityEdge display. It’s ideal for both work and play, featuring the latest Intel processors and a sleek design.'
    },
    {
        id: 3,
        name: 'HP Spectre x360',
        category: 'Laptops',
        price: 120000,
        images: [
            hpsx1,
            hpsx2,
            hpsx3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: true,
        recommended: true,
        description: 'The HP Spectre x360 is a versatile 2-in-1 laptop with a premium build and a vibrant display. It offers great performance and battery life, making it perfect for any task.'
    },
    {
        id: 4,
        name: 'Lenovo ThinkPad X1 Carbon',
        category: 'Laptops',
        price: 150000,
        images: [
            lenovo1,
            lenovo2,
            lenovo3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: false,
        recommended: false,
        description: 'The Lenovo ThinkPad X1 Carbon is a business-oriented laptop known for its durability and excellent keyboard. It features robust security features and long battery life.'
    },
    {
        id: 5,
        name: 'Asus ROG Zephyrus',
        category: 'Laptops',
        price: 130000,
        images: [
            asus1,
            asus2,
            asus3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: true,
        recommended: false,
        description: 'The Asus ROG Zephyrus is a gaming laptop that combines powerful performance with a sleek design. It features an NVIDIA GeForce GPU and a high refresh rate display for an immersive gaming experience.'
    },

    // Gaming Consoles
    {
        id: 6,
        name: 'PlayStation 5',
        category: 'Gaming Consoles',
        price: 50000,
        images: [
            ps1,
            ps2,
            ps3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The PlayStation 5 is the latest gaming console from Sony, featuring ultra-fast loading times, stunning graphics, and a wide library of exclusive games. It also supports 4K gaming and ray tracing.'
    },
    {
        id: 7,
        name: 'Xbox Series X',
        category: 'Gaming Consoles',
        price: 50000,
        images: [
            xbox1,
            xbox2,
            xbox3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: true,
        recommended: false,
        description: 'The Xbox Series X is Microsoft’s most powerful console yet, delivering 4K gaming at 60 frames per second. With backward compatibility and a growing library of games, it’s perfect for gamers of all kinds.'
    },
    {
        id: 8,
        name: 'Nintendo Switch',
        category: 'Gaming Consoles',
        price: 25000,
        images: [
            nintendo1,
            nintendo2,
            nintendo3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Nintendo Switch is a unique gaming console that can be used as a handheld or connected to your TV. It features a diverse library of games and the ability to play with friends online or locally.'
    },
    {
        id: 9,
        name: 'PlayStation 4',
        category: 'Gaming Consoles',
        price: 30000,
        images: [
            ps4_1,
            ps4_2,
            ps4_3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: true,
        recommended: false,
        description: 'The PlayStation 4 remains a popular choice for gamers, featuring a vast library of titles and online multiplayer capabilities. It’s an affordable option for those who want great gaming experiences.'
    },
    {
        id: 10,
        name: 'Xbox One S',
        category: 'Gaming Consoles',
        price: 28000,
        images: [
            xboxS1,
            xboxS2,
            xboxS3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Xbox One S is a versatile console that plays a wide range of games and movies. With its ability to stream content in 4K and access to Xbox Live, it’s a great choice for entertainment.'
    },

    // Watches
    {
        id: 11,
        name: 'Apple Watch Series 6',
        category: 'Watches',
        price: 40000,
        images: [
            apple1,
            apple2,
            apple3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: true,
        recommended: false,
        description: 'The Apple Watch Series 6 is the latest smartwatch from Apple, featuring advanced health monitoring, customizable watch faces, and seamless integration with iOS devices.'
    },
    {
        id: 12,
        name: 'Samsung Galaxy Watch 4',
        category: 'Watches',
        price: 30000,
        images: [
            galaxy1,
            galaxy2,
            galaxy3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Samsung Galaxy Watch 4 combines fitness tracking and smartwatch features, offering an elegant design and compatibility with both Android and iOS devices.'
    },
    {
        id: 13,
        name: 'Garmin Fenix 6',
        category: 'Watches',
        price: 50000,
        images: [
            garmin1,
            garmin2,
            garmin3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Garmin Fenix 6 is a rugged smartwatch designed for outdoor enthusiasts, featuring GPS tracking, heart rate monitoring, and multiple sports modes.'
    },
    {
        id: 14,
        name: 'Fossil Gen 5',
        category: 'Watches',
        price: 22000,
        images: [
            fossil1,
            fossil2,
            fossil3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: true,
        recommended: false,
        description: 'The Fossil Gen 5 is a stylish smartwatch that offers a blend of classic design with modern technology, featuring customizable watch faces and fitness tracking capabilities.'
    },
    {
        id: 15,
        name: 'Fitbit Versa 3',
        category: 'Watches',
        price: 19000,
        images: [
            fitbit1,
            fitbit2,
            fitbit3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Fitbit Versa 3 is a fitness-focused smartwatch that tracks your activities, heart rate, and sleep patterns, while also allowing you to receive notifications and control music.'
    },
    {
        id: 16,
        name: 'JBL Flip 5',
        category: 'Speakers',
        price: 8000,
        images: [
            jbl1,
            jbl2,
            jbl3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The JBL Flip 5 is a compact, portable Bluetooth speaker with powerful sound. It offers up to 12 hours of playtime and is waterproof, making it perfect for outdoor adventures.'
    },
    {
        id: 17,
        name: 'Sonos One',
        category: 'Speakers',
        price: 15000,
        images: [
            sonos1,
            sonos2,
            sonos3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: true,
        recommended: false,
        description: 'The Sonos One is a smart speaker with Amazon Alexa built-in. It delivers rich, room-filling sound and can be paired with other Sonos speakers for multi-room audio.'
    },
    {
        id: 18,
        name: 'Bose SoundLink Revolve',
        category: 'Speakers',
        price: 19000,
        images: [
            bose1,
            bose2,
            bose3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: true,
        recommended: true,
        description: 'The Bose SoundLink Revolve offers true 360-degree sound in a compact and durable design. It features up to 12 hours of battery life and water resistance for outdoor use.'
    },
    {
        id: 19,
        name: 'Amazon Echo (4th Gen)',
        category: 'Speakers',
        price: 10000,
        images: [
            echo1,
            echo2,
            echo3
        ],
        rating: '⭐️ ⭐️⭐️ ⭐️ ★',
        featured: false,
        recommended: true,
        description: 'The Amazon Echo (4th Gen) is a smart speaker with Alexa, designed for convenience. It offers high-quality sound, smart home control, and access to voice commands for hands-free operation.'
    },
    {
        id: 20,
        name: 'Marshall Stanmore II',
        category: 'Speakers',
        price: 25000,
        images: [
            marshall1,
            marshall2,
            marshall3
        ],
        rating: '⭐️ ⭐️⭐️ ★ ★',
        featured: true,
        recommended: false,
        description: 'The Marshall Stanmore II is a premium Bluetooth speaker with a classic Marshall design. It delivers powerful, clean sound and can be customized with Marshall’s control knobs.'
    }

]