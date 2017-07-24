package com.example;

import com.example.config.Profiles;
import com.example.testdata.TestDataService;
import org.hsqldb.util.DatabaseManagerSwing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.Environment;

import javax.annotation.PostConstruct;
import java.util.Arrays;

/**
 * This class is both a bootstrap class and a configuration class.
 */

//Enable component-scanning and auto-configuration
@SpringBootApplication
//If we remove above annotation, we will get exception -
//Unable to start EmbeddedWebApplicationContext due to missing EmbeddedServletContainerFactory bean.
public class Application {

  private static final Logger logger = LoggerFactory.getLogger(Application.class);

  @Autowired
  private Environment env;

  @Autowired
  TestDataService testDataCreator;

  public static void main(String[] args) {
    //Bootstrap the application
    //SpringApplication.run(Application.class, args);

    //When i used DatabaseManagerSwing I got java.awt.HeadlessException hence using SpringApplicationBuilder
    SpringApplicationBuilder builder = new SpringApplicationBuilder(Application.class);
    builder.headless(false);
    ConfigurableApplicationContext context = builder.run(args);
  }

  @PostConstruct
  public void getDbManager() {
    logger.info("Spring active profiles: " + Arrays.toString(env.getActiveProfiles()));
    if (env.acceptsProfiles(Profiles.DEVELOPMENT)) {
      testDataCreator.createTestData();
      DatabaseManagerSwing.main(
        new String[]{"--url", "jdbc:hsqldb:mem:application", "--user", "sa", "--password", ""});

    }
  }
}
