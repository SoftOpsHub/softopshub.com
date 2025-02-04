import React from "react";
import image5 from "../../assets/conversation.jpg";
import image6 from "../../assets/Docker.jpg";

const Card = ({ image, tag, title, author, readTime }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 h-100  items-center">
            <img src={image} alt="Card Image" className="w-full h-40 object-cover" />
            <div className="p-4">
                <span className="bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-md">
                    {tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">{title}</h3>
                <div className="mt-3 text-gray-500 text-sm flex justify-between">
                    <span>By {author}</span>
                    <span>{readTime} min read</span>
                </div>
            </div>
        </div>
    );
};

const CardContainer = () => {
    const cards = [
        {
            image: "https://d306ae0aiwjq6t.cloudfront.net/images/news/iot-aws.png",
            title: "Learn how Softopshub revolutionizes DevOps with AI/ML",
            href: "#",
            author: "AWS Partner Network TV",
            readTime: 3,
        },
        {
            image: "https://d306ae0aiwjq6t.cloudfront.net/images/news/aws.png",
            tag: "Blog",
            href: "#",
            title: "How Softopshub Navigated the Challenges of Streaming IoT Data",
            author: "AWS Partner Network Blog",
            readTime: 3,
        },
        {
            image: [image6],
            tag: "Case Study",
            href: "#",
            title: "Softopshub Helps Torus Investments Ensure Secure Communications",
            author: "AWS Partner Success Stories",
            readTime: 3,
        },
        {
            image: [image5],
            href: "#",
            tag: "Case Study",
            title: "Softopshub Helps Torus Investments Ensure Secure Communications",
            author: "AWS Partner Success Stories",
            readTime: 3,
        },
    ];

    return (
        <div className="p-6">
            <div className="flex gap-4 flex-wrap overflow-x-auto pb-4">
                {cards.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700">See All</button>
            </div>
        </div>
    );
};

export default CardContainer;
