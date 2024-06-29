import React, { useState, useEffect } from "react";
import apis from "../../api/mahasiswa";

const CreateMahasiswa = ({ mhs, onClose }) => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [angkatan, setAngkatan] = useState('');
    const [prodi, setProdi] = useState('Teknik Informatika');

    useEffect(() => {
        if (mhs) {
            setNim(mhs.nim);
            setNama(mhs.nama);
            setAngkatan(mhs.angkatan);
            setProdi(mhs.prodi);
        }
    }, [mhs]);

    const clearForm = () => {
        setNim('');
        setNama('');
        setAngkatan('');
        setProdi('Teknik Informatika');
    };

    const addOrUpdateMahasiswa = async () => {
        if (!nim.trim() || !nama.trim() || !angkatan.trim() || !prodi.trim()) {
            alert('Isian tidak boleh kosong');
        } else {
            const mhsData = { nim: nim.trim(), nama: nama.trim(), angkatan: angkatan.trim(), prodi };
            try {
                if (mhs) {
                    await apis.updateMahasiswa(mhsData);
                    alert('Data berhasil diupdate');
                } else {
                    await apis.createMahasiswa(mhsData);
                    alert('Data berhasil ditambah');
                }
                clearForm();
                onClose();
            } catch (error) {
                console.error('Error:', error);
                if (error.response) {
                    console.error('Server response:', error.response.data);
                    alert(`Terjadi kesalahan: ${error.response.data.message}`);
                } else {
                    alert('Terjadi kesalahan saat menambah/mengupdate data');
                }
            }
        }
    };

    return (
        <div className="w-1/2 mx-auto rounded-lg shadow-lg p-8 bg-white">
            <h1 className="text-2xl font-bold">{mhs ? 'Update Mahasiswa' : 'Input Mahasiswa'}</h1>
            <div className="my-4">
                <label htmlFor="nim" className="block text-gray-700 font-bold mb-2">
                    NIM:
                </label>
                <input
                    type="text"
                    id="nim"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ex: 1121186106"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    disabled={!!mhs}
                />
            </div>
            <div className="my-4">
                <label htmlFor="nama" className="block text-gray-700 font-bold mb-2">
                    Nama:
                </label>
                <input
                    type="text"
                    id="nama"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ex: Windi"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
            </div>
            <div className="my-4">
                <label htmlFor="angkatan" className="block text-gray-700 font-bold mb-2">
                    Angkatan:
                </label>
                <input
                    type="text"
                    id="angkatan"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ex: 2021"
                    value={angkatan}
                    onChange={(e) => setAngkatan(e.target.value)}
                />
            </div>
            <div className="my-4">
                <label htmlFor="prodi" className="block text-gray-700 font-bold mb-2">
                    Prodi Studi:
                </label>
                <select
                    id="prodi"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={prodi}
                    onChange={(e) => setProdi(e.target.value)}
                >
                    <option value="Teknik Informatika">Teknik Informatika</option>
                    <option value="Manajemen Informatika">Manajemen Informatika</option>
                </select>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={addOrUpdateMahasiswa}
                >
                    {mhs ? 'Update' : 'Tambah'}
                </button>
                <button
                    className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default CreateMahasiswa;
