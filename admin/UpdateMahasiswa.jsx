import React, { useEffect, useState } from 'react';
import apis from '../../api/mahasiswa';

const UpdateMahasiswa = ({ isOpen, onClose, mhs }) => {
  const [_mhs, setMhs] = useState({ nim: '', nama: '', angkatan: '', prodi: '' });

  useEffect(() => {
    setMhs(mhs);
  }, [mhs]);

  const handleInputChange = (event) => {
    setMhs({
      ..._mhs,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apis.updateMahasiswa(_mhs.nim, _mhs); 
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>NIM:</label>
        <input
          type="text"
          name="nim"
          value={_mhs.nim}
          onChange={handleInputChange}
        />
        <label>Nama:</label>
        <input
          type="text"
          name="nama"
          value={_mhs.nama}
          onChange={handleInputChange}
        />
        <label>Angkatan:</label>
        <input
          type="text"
          name="angkatan"
          value={_mhs.angkatan}
          onChange={handleInputChange}
        />
        <label>Prodi:</label>
        <input
          type="text"
          name="prodi"
          value={_mhs.prodi}
          onChange={handleInputChange}
        />
        <button type="submit">Update Mahasiswa</button>
      </form>
    </div>
  );
};

export default UpdateMahasiswa;
