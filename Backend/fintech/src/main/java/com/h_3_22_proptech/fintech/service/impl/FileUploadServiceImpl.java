package com.h_3_22_proptech.fintech.service.impl;

import com.h_3_22_proptech.fintech.dto.response.FileResponseDTO;
import com.h_3_22_proptech.fintech.persistance.entity.FileEntity;
import com.h_3_22_proptech.fintech.persistance.entity.UserEntity;
import com.h_3_22_proptech.fintech.persistance.mapper.IFileMapper;
import com.h_3_22_proptech.fintech.persistance.repository.IFileRepository;
import com.h_3_22_proptech.fintech.persistance.repository.IUserRepository;
import com.h_3_22_proptech.fintech.service.IFileUploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class FileUploadServiceImpl implements IFileUploadService {

    @Autowired
    private IFileMapper fileMapper;
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IFileRepository fileRepository;

    //private final Path rootLocation = Paths.get("uploads");

    //private final String rootLocation = "SA_fintech/fintech/uploads"; // Ruta específica

    @Override
    public String saveFile(MultipartFile file, String idUser) {
        try {
            // Verifica si el usuario existe
            //UserEntity user = userRepository.findById(idUser).orElseThrow(() -> new RuntimeException("User not found"));

            // Guardar el archivo en el sistema de archivos
            //String filename = idUser + "_" + file.getOriginalFilename();
            //Path destinationFile = this.rootLocation.resolve(Paths.get(filename)).normalize().toAbsolutePath();


            //Files.copy(file.getInputStream(), destinationFile, StandardCopyOption.REPLACE_EXISTING);

// Verifica si el usuario existe
            UserEntity user = userRepository.findById(idUser)
                    .orElseThrow(() -> new RuntimeException("User not found"));

            // Definir la ruta fija
            String rootPath = "SA_fintech/fintech/uploads";

            // Crear el directorio si no existe
            Path rootLocation = Paths.get(rootPath).normalize().toAbsolutePath();
            if (!Files.exists(rootLocation)) {
                Files.createDirectories(rootLocation);
            }

            // Generar nombre único para el archivo
            Random random = new Random();
            String filename = idUser + "_" + String.format("%04d", random.nextInt(10000))
                    + "_" + file.getOriginalFilename();

            // Definir la ubicación completa del archivo
            Path destinationFile = rootLocation.resolve(filename).normalize();

            // Guardar el archivo en el sistema de archivos
            Files.copy(file.getInputStream(), destinationFile, StandardCopyOption.REPLACE_EXISTING);




            // Crear y guardar la entidad File
            FileEntity fileEntity = new FileEntity();
            fileEntity.setFileName(file.getOriginalFilename());
            fileEntity.setFilePath(destinationFile.toString());
            //fileEntity.setContentType(file.getContentType());
            //fileEntity.setFileSize(file.getSize());
            fileEntity.setUser(user); // Asociar al usuario

            fileRepository.save(fileEntity);

            return destinationFile.toString();
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }

    public List<FileResponseDTO> getFilesByUser(String idUser) {
        UserEntity user = userRepository.findById(idUser)
                .orElseThrow(() -> new RuntimeException("User not found"));


        return user.getFilesList().stream()
                .map(fileMapper::toFileResponseDTO) // Aplicar el mapper en cada entidad
                .collect(Collectors.toList());
    }
}

