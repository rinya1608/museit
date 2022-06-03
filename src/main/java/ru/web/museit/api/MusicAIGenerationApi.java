package ru.web.museit.api;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.logging.log4j.Level;
import org.springframework.stereotype.Component;
import ru.web.museit.property.ApiProperties;

import java.util.Map;

@Component
@RequiredArgsConstructor
@Log4j2
public class MusicAIGenerationApi {

    private final ApiProperties apiProperties;

    public byte[] sendFile(byte[] fileBytes, String filename, String generatorStyle) {
        String postUrl = apiProperties.getMusicGeneration().getUrl() + "/api/file";
        try (CloseableHttpClient client = HttpClients.createDefault()) {
            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
            HttpPost post = new HttpPost(postUrl);
            builder.addBinaryBody("file", fileBytes, ContentType.APPLICATION_OCTET_STREAM, filename);
            builder.addTextBody("generatorStyle", generatorStyle);
            log.info("Send file to " + postUrl);
            post.setEntity(builder.build());
            CloseableHttpResponse response = client.execute(post);
            int statusCode = response.getStatusLine().getStatusCode();
            log.log(statusCode < 400 ? Level.INFO : Level.ERROR, "Service return {} status code", statusCode);
            if (statusCode < 400) {
                return response.getEntity()
                        .getContent()
                        .readAllBytes();
            } else return null;
        } catch (Exception e) {
            log.error("A exception while sending a post request to the music generate service", e);
            return null;
        }
    }
}
