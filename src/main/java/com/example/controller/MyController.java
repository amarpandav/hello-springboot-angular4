package com.example.controller;

import com.example.bean.LabelProperties;
import com.example.config.Profiles;
import com.example.domain.Book;
import com.example.service.ReadingListRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.jar.Attributes;
import java.util.jar.Manifest;

import static org.hibernate.validator.internal.util.CollectionHelper.newArrayList;

@Controller
@RequestMapping("/rest")
public class MyController {

  private static final Logger logger = LoggerFactory.getLogger(MyController.class);

  @Autowired
  private Environment env;

  @Autowired
  private ReadingListRepository readingListRepository;

  //TODO - books will come from DB
  private List<Book> books = newArrayList();

  @Autowired
  private LabelProperties labelProperties;

  @Value("${lbl.myNameIs}")
  private String myNameIs;

  private static final String MANIFEST_RESOURCE_NAME = "/META-INF/MANIFEST.MF";

  @RequestMapping(value = "initializeAppAttributes", method = RequestMethod.GET)
  @ResponseBody
  private AppAttributesDto initializeAppAttributes(HttpServletRequest request) {
    String activeVersion = StringUtils.arrayToCommaDelimitedString(env.getActiveProfiles());
    String componentVersion = getManifestVersion(request);
    AppAttributesDto dto = new AppAttributesDto(activeVersion, componentVersion);;
    return dto;
  }

  private String getManifestVersion(HttpServletRequest request) {
    ServletContext servletContext = request.getServletContext();
    Manifest mf = new Manifest();
    try {
      //  InputStream is = this.getClass().getClassLoader().getResourceAsStream(MANIFEST_RESOURCE_NAME);
      InputStream is = servletContext.getResourceAsStream(MANIFEST_RESOURCE_NAME);
      //String v = this.getClass().getPackage().getImplementationVersion();
      if (is == null) {
        return "local";
      }

      mf.read(is);
      return mf.getMainAttributes().getValue(Attributes.Name.IMPLEMENTATION_VERSION);
    } catch (Exception ex) {
      // Log the exception, but carry on. No need to propagate the Exception.
      logger.error("Error getting manifest version for footer", ex);
    }
    return "";
  }

 @RequestMapping(value = "findUsers", method = RequestMethod.GET)
 @ResponseBody
 public Iterable<UserDto> findUsers() {
    //TODO - Data must come from DB
    List<UserDto> users = new ArrayList<UserDto>();
    users.add(new UserDto(1, "Amar", "Male", "amarpandav@yahoo.com"));
    users.add(new UserDto(2, "Rian", "Male", "rianpandav@gmail.com"));

    return users;
  }

  @RequestMapping(value = "hello", method = RequestMethod.GET)
  @ResponseBody
  public String hello() {
    return "Hello Amar";
  }

  @RequestMapping(value = "error", method = RequestMethod.GET)
  public String errorPage() {
    throw new IllegalStateException("Example to show how error page is shown.");
  }


}
