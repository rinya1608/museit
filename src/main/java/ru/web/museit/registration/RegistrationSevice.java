package ru.web.museit.registration;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import ru.web.museit.appuser.AppUser;
import ru.web.museit.appuser.AppUserRole;
import ru.web.museit.appuser.AppUserService;

@Service
@AllArgsConstructor
public class RegistrationSevice {

    private final AppUserService appUserService;

    public Boolean register(RegistrationRequest request) {

        if (request.getLogintype() == 0){
            return appUserService.signUpUser(
                new AppUser(
                    request.getUsername(), 
                    request.getPassword(), 
                    AppUserRole.USER)
            );  
        }
        
        return false;
    }
    
}
