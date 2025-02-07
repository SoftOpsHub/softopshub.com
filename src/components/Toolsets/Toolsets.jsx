import React from "react";
import {
  SiKubernetes,
  SiDocker,
  SiAnsible,
  // SiAmazonaws,
  SiApachekafka,
  SiGrafana,
  SiInfluxdb,
  SiElasticsearch,
  SiApachespark,
  // SiMicrosoftazure,
} from "react-icons/si";
import { FaAws, FaKey } from "react-icons/fa";

const tools = [
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 text-4xl" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-400 text-4xl" /> },
  { name: "Ansible", icon: <SiAnsible className="text-red-500 text-4xl" /> },
  // { name: "Ambassador", icon: <SiAmazonaws className="text-yellow-500 text-4xl" /> }, // Placeholder
  { name: "Amazon EKS", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
  { name: "Amazon ECS", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
  // { name: "Azure Kubernetes", icon: <SiMicrosoftazure className="text-blue-600 text-4xl" /> },
  // { name: "Azure API Mgmt", icon: <SiMicrosoftazure className="text-blue-600 text-4xl" /> },
  // { name: "Azure Container Instances", icon: <SiMicrosoftazure className="text-blue-600 text-4xl" /> },
  { name: "Amazon API Gateway", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
  { name: "InfluxDB", icon: <SiInfluxdb className="text-green-500 text-4xl" /> },
  { name: "ELK", icon: <SiElasticsearch className="text-orange-500 text-4xl" /> },
  { name: "Grafana", icon: <SiGrafana className="text-orange-500 text-4xl" /> },
  { name: "AWS Budgets", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
  { name: "AWS Cost Explorer", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
  { name: "Amazon Cloud Watch", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
  { name: "Azure Key Vault", icon: <FaKey className="text-blue-600 text-4xl" /> },
  // { name: "Cassandra", icon: <SiAmazonaws className="text-blue-500 text-4xl" /> }, // Placeholder
  // { name: "Druid", icon: <SiAmazonaws className="text-blue-500 text-4xl" /> }, // Placeholder
  // { name: "Amazon MSK", icon: <SiAmazonaws className="text-blue-500 text-4xl" /> }, // Placeholder
  { name: "Kafka", icon: <SiApachekafka className="text-black text-4xl" /> },
  { name: "Apache Spark", icon: <SiApachespark className="text-orange-500 text-4xl" /> },
  { name: "AWS Data Pipeline", icon: <FaAws className="text-yellow-500 text-4xl" /> }, // Placeholder
];

const Toolsets = () => {
  return (
    <div className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Toolsets</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-12">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg">
            {tool.icon}
            <span className="text-sm font-medium mt-2">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolsets;
