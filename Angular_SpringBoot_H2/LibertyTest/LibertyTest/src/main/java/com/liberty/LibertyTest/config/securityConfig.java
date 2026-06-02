package com.liberty.LibertyTest.config;



/*import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class securityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{
       http
               .headers(headers -> headers
                       .frameOptions(frameOptions -> frameOptions.sameOrigin()))

               .csrf(csrf->csrf.disable())
               .authorizeHttpRequests(auth->
               auth.requestMatchers("/api/**").permitAll()
                       .requestMatchers("/admin/**").hasRole("ADMIN")
                       .anyRequest().authenticated()
       )
               .httpBasic(Customizer.withDefaults());

    return http.build();
    //disable


    }
}*/
