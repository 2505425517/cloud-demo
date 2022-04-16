package com.mywork.message.service;

import com.github.pagehelper.Page;
import com.mywork.message.pojo.Message;

import java.util.List;
import java.util.Map;

public interface MessageService {

   //
   Page<Message> search(Map searchMap);

   public List<Message> findAll();

   public Boolean add(Message project);

   List<Message> findByUserId(Integer userid);

   public Boolean update(Message project);

   public Boolean del(List<Integer> ids);
}
