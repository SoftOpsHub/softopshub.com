import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/richy-great-MAYEkmn7G6E-unsplash.jpg"
import image1 from "../../assets/Test Automation.webp"
import image2 from "../../assets/ Microservices with Kubernetes.webp"
import image3 from "../../assets/CI.CD Pipelines.webp"
import image4 from "../../assets/Optimizing.webp"
const articles = [
  {
    title: "How GitHub Actions, Kustomize, And ArgoCD Revolutionized Controlled Deployment",
    category: "DevOps",
    image: [image],
    link: "/article",
  },
  {
    title: "95% Faster Testing Through Automation Of Performance & Functional Tests For A Streaming Platform",
    category: "Test Automation | Gen AI",
    image: [image1],
    link: "/infrastructure",
  },
  {
    title: "Scaling Microservices with Kubernetes and Istio",
    category: "Cloud & DevOps",
    image: [image2],
    link: "/scaling",
  },
  {
    title: "Enhancing CI/CD Pipelines with AI-Driven Insights",
    category: "CI/CD | AI",
    image: [image3],
    link: "/pipelines",
  },
  {
    title: "Optimizing Frontend Performance for Large Scale Applications",
    category: "Web Performance",
    image: [image4],
    link: "/article/web-performance",
  },
];

const ArticleCards = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-9 p-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className="relative rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 card-animation"
          onClick={() => navigate(article.link)}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-60 object-cover"
          />
          <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full py-4 px-6">
            <div className="flex justify-between items-center text-white">
              <div>
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <div className="flex items-center space-x-2 mt-2 text-sm">
                  <span>{article.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleCards;
 