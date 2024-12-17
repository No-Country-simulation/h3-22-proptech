package com.h_3_22_proptech.fintech.service;

import com.h_3_22_proptech.fintech.dto.response.FileResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.FileEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.List;

public interface IFileUploadService {

   // void uploadFile(InputStream inputStream);

    public String saveFile(MultipartFile file, String idUser);

    public List<FileResponseDTO> getFilesByUser(String idUser);
}
