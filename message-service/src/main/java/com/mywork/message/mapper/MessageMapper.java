package com.mywork.message.mapper;


import com.mywork.message.pojo.Message;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

@Repository
public interface MessageMapper extends Mapper<Message>  {

    @Select("select * from tb_message where message_getid = #{userid}")
    public List<Message> selectbyid (Integer userid);

}