import React from "react";
import image from "../../assets/tag.png";
import Card2 from "../Card/Card2";
import Toolsets from "../Toolsets/Toolsets";
export default function CloudDevOps() {
  return (
    <>
    <div>
      <div className="w-full">
        <img src={image} alt="Cloud & DevOps Banner" className="w-full" />
      </div>

      <div className="flex flex-col lg:flex-row p-8 bg-white">
        <div className="w-full lg:w-1/4 border-r pr-6 mb-6 lg:mb-0">
          <h2 className="text-3xl font-bold">Cloud & DevOps</h2>
          <ul className="mt-6 space-y-4 text-gray-600 font-medium">
            <li className="text-teal-500 border-l-2 border-teal-500 pl-2">Cloud Native Architecture</li>
            <li>Data Pipelines, Big Data & Analytics Service</li>
            <li>Continuous Integration Continuous Deployment Service</li>
            <li>Observability</li>
          </ul>
        </div>

        <div className="w-full lg:w-3/4 pl-8">
          <h3 className="text-2xl font-bold">Cloud Native Architecture</h3>
          <p className="text-gray-700 mt-4">
            Cloud Native Architecture uses the core cloud principle of on-demand provisioning to build reliable, fault-tolerant, and cost-effective solutions, all with a faster time to market when compared to legacy architectures. The decoupling of architectural components allows continuous improvement and deployment of your product without any downtime.
          </p>
          <p className="text-gray-700 mt-4">
            At Emumba, our cloud-certified architects can work with your team to either build a cloud native architecture from scratch, or recast your existing application architecture to achieve the target requirements. We can quickly identify areas of improvement in your architecture and propose cloud native elements including pub-sub, streaming, microservices, and server-less components.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/kubernetes.png" alt="Kubernetes" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/docker.png" alt="Docker" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/ansible.png" alt="Ansible" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/ambassador.png" alt="Ambassador" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/aws-eks.png" alt="Amazon EKS" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/aws-ecs.png" alt="Amazon ECS" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/azure-kubernetes.png" alt="Azure Kubernetes" className="h-8" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 flex justify-center items-center">
              <img src="/icons/azure-api.png" alt="Azure API Mgmt" className="h-8" />
            </div>
          </div>
    <Card2 />
        </div>
      </div>
    </div>
    <Toolsets />
    </>
  );
}

