package com.h_3_22_proptech.fintech.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FileResponseDTO {

    private String idFile;

    private String fileName;

    private String filePath;

}
