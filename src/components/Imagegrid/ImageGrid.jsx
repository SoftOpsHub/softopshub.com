import React from 'react';
import officeView from '../../assets/officeview.jpg';
import meeting from '../../assets/meeting.jpg';
import working from '../../assets/working.jpg';
import conversation from '../../assets/conversation.jpg';

const ImageGrid = () => {
  const imageSources = [
    { src: officeView, alt: 'Office View', title: 'Modern Office', description: 'A stylish and spacious office designed for productivity.', cta: 'Explore Office' },
    { src: meeting, alt: 'Meeting', title: 'Team Collaboration', description: 'Effective team collaboration leads to better results.', cta: 'Learn More' },
    { src: working, alt: 'Working', title: 'Focused Work', description: 'A focused work environment enhances creativity and efficiency.', cta: 'See More' },
    { src: conversation, alt: 'Conversation', title: 'Productive Discussion', description: 'Engaging conversations foster innovative ideas.', cta: 'Join Us' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {imageSources.map((image, index) => (
        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full h-64 object-cover"
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-2xl font-semibold text-gray-800">{image.title}</h3>
            <p className="text-gray-600 mt-2">{image.description}</p>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">{image.cta}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
