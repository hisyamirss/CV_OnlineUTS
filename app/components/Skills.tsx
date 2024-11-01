import React from 'react';
import './skills.css'; // Pastikan untuk mengimpor file CSS ini

const skillsData = [
    { name: 'Editing', percentage: 80 },
    { name: 'Coding', percentage: 75 },
    { name: 'Gaming', percentage: 85 },
    { name: 'Public Speaking', percentage: 65 },
];

const Skills = () => {
    return (
        <div className="container mx-auto p-4 text-center">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {skillsData.map((skill, index) => (
                    <div key={index} className="mb-6">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <div className="relative pt-2">
                            <div className="flex items-center justify-between">
                                <div className="w-full bg-gray-200 rounded-full h-4">
                                    <div
                                        className="bg-blue-600 h-4 rounded-full transition-all duration-300 ease-in-out"
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                                <span className="ml-2 font-medium text-gray-600">{skill.percentage}%</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
