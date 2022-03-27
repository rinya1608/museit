package ru.web.museit.api;

import lombok.RequiredArgsConstructor;
import org.apache.http.HttpHeaders;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import ru.web.museit.property.ApiProperties;

import java.io.*;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;

@Component
@RequiredArgsConstructor
public class MusicAIGenerationApi {
    private final static Logger LOG = LogManager.getLogger(MusicAIGenerationApi.class);

    private final ApiProperties apiProperties;

    public InputStream sendFile(byte[] fileBytes, String filename) {
        try (CloseableHttpClient client = HttpClients.createDefault()) {
            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
            HttpPost post = new HttpPost(apiProperties.getMusicGeneration().getUrl());
            builder.addBinaryBody("file", fileBytes, ContentType.APPLICATION_OCTET_STREAM, filename);
            System.out.println(String.valueOf(fileBytes.length));
            //post.setHeader(HttpHeaders.CONTENT_LENGTH, String.valueOf(fileBytes.length));
            post.setEntity(builder.build());
            CloseableHttpResponse response = client.execute(post);
            int statusCode = response.getStatusLine().getStatusCode();
            LOG.log(statusCode < 400 ? Level.INFO : Level.ERROR,String.format("Service return %s status code", statusCode));
            if (statusCode < 400){
                return response.getEntity().getContent();
            }
            else return null;
        } catch (Exception e) {
            LOG.log(Level.ERROR,"A exception while sending a post request to the music generate service", e);
            return null;
        }
    }
}
