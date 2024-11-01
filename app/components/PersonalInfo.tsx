import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 max-w-md mx-auto mt-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Personal Info</h2>
            <div className="text-gray-700">
                <p className="text-lg mb-2"><strong>Name:</strong> Hisyam Irsyad Athallah</p>
                <p className="text-lg mb-2"><strong>TTL:</strong> Bandung, 22 Januari 2003</p>
                <p className="text-lg mb-2"><strong>Jenis Kelamin:</strong> Laki-laki</p>
                <p className="text-lg mb-2"><strong>Tinggi Badan:</strong> 169 cm</p>
                <p className="text-lg mb-2"><strong>Berat Badan:</strong> 67 kg</p>
                <p className="text-lg mb-2"><strong>Status Pernikahan:</strong> Belum Menikah</p>
                <p className="text-lg mb-2"><strong>Whatsapp:</strong> 087776677161</p>
                <p className="text-lg"><strong>Email:</strong> hisyamirss@gmail.com</p>
            </div>
        </div>
    );
};

export default PersonalInfo;
