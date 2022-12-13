package ru.web.museit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.web.museit.entity.RefreshToken;
import ru.web.museit.entity.User;

/**
 * @author Yarullin Renat
 */
@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    RefreshToken findByToken(String token);

    RefreshToken findByUser(User user);
}
