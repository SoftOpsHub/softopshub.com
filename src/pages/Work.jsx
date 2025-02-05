import React from "react";
import ArticleCards from "../components/Work/ArticleCards";
export default function OurWork() {
    const tags = [
        "AWS", "Gen AI", "Telemetry", "Zero-Trust", "SD-WAN Orchestration",
        "Analytics", "BI", "Data Quality", "Data Discovery & Catalog", "Data Engineering"
    ];

    return (
        <>
            <section className="text-center py-16 bg-white">
                <h2 className="text-4xl font-bold text-gray-900">Our Work</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Navigating cutting-edge terrain with a continual emphasis on quality, our standout
                    domains include cloud applications for:
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
            <ArticleCards />
        </>
    );
}
