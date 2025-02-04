import React from "react";

const tools = [
  { name: "Kubernetes", logo: "/logos/kubernetes.png" },
  { name: "Docker", logo: "/logos/docker.png" },
  { name: "Ansible", logo: "/logos/ansible.png" },
  { name: "Ambassador", logo: "/logos/ambassador.png" },
  { name: "Amazon EKS", logo: "/logos/amazon-eks.png" },
  { name: "Amazon ECS", logo: "/logos/amazon-ecs.png" },
  { name: "Azure Kubernetes", logo: "/logos/azure-kubernetes.png" },
  { name: "Azure API Mgmt", logo: "/logos/azure-api.png" },
  { name: "Azure Container Instances", logo: "/logos/azure-container.png" },
  { name: "Amazon API Gateway", logo: "/logos/amazon-api.png" },
  { name: "InfluxDB", logo: "/logos/influxdb.png" },
  { name: "ELK", logo: "/logos/elk.png" },
  { name: "Grafana", logo: "/logos/grafana.png" },
  { name: "AWS Budgets", logo: "/logos/aws-budgets.png" },
  { name: "AWS Cost Explorer", logo: "/logos/aws-cost.png" },
  { name: "Amazon Cloud Watch", logo: "/logos/amazon-cloudwatch.png" },
  { name: "Azure Key Vault", logo: "/logos/azure-key.png" },
  { name: "Cassandra", logo: "/logos/cassandra.png" },
  { name: "Druid", logo: "/logos/druid.png" },
  { name: "Amazon MSK", logo: "/logos/amazon-msk.png" },
  { name: "Kafka", logo: "/logos/kafka.png" },
  { name: "Apache Spark", logo: "/logos/spark.png" },
  { name: "AWS Data Pipeline", logo: "/logos/aws-data.png" }
];

const Toolsets = () => {
  return (
    <div className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Toolsets</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-12">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow-md p-3 rounded-lg"
          >
            <img src={tool.logo} alt={tool.name} className="h-6 mr-2" />
            <span className="text-sm font-medium">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toolsets;
