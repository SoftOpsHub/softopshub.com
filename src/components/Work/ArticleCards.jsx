import React from "react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    title: "How GitHub Actions, Kustomize, And ArgoCD Revolutionized Controlled Deployment",
    category: "DevOps",
    image: "src/assets/richy-great-MAYEkmn7G6E-unsplash.jpg",
    link: "/article/devops",
  },
  {
    title: "95% Faster Testing Through Automation Of Performance & Functional Tests For A Streaming Platform",
    category: "Test Automation | Gen AI",
    image: "src/assets/Test Automation.jpg",
    link: "/article/test-automation",
  },
  {
    title: "Scaling Microservices with Kubernetes and Istio",
    category: "Cloud & DevOps",
    image: "src/assets/ Microservices with Kubernetes.jpg",
    link: "/article/kubernetes",
  },
  {
    title: "Enhancing CI/CD Pipelines with AI-Driven Insights",
    category: "CI/CD | AI",
    image: "src/assets/CI.CD Pipelines.jpg",
    link: "/article/cicd-ai",
  },
  {
    title: "Optimizing Frontend Performance for Large Scale Applications",
    category: "Web Performance",
    image: "src/assets/Optimizing.jpg",
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
 