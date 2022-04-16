package com.mywork.view.pojo;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Table(name="tb_message")
public class Message {
    @Id
    private Integer messageid;
    private String messageType;
    private Integer messageFromid;
    private Integer messageGetid;
    private String messageDate;
    private Date messageTime;
    private Integer messageStatus;

    public Integer getMessageid() {
        return messageid;
    }

    public void setMessageid(Integer messageid) {
        this.messageid = messageid;
    }

    public String getMessageType() {
        return messageType;
    }

    public void setMessageType(String messageType) {
        this.messageType = messageType;
    }

    public Integer getMessageFromid() {
        return messageFromid;
    }

    public void setMessageFromid(Integer messageFromid) {
        this.messageFromid = messageFromid;
    }

    public Integer getMessageGetid() {
        return messageGetid;
    }

    public void setMessageGetid(Integer messageGetid) {
        this.messageGetid = messageGetid;
    }

    public String getMessageDate() {
        return messageDate;
    }

    public void setMessageDate(String messageDate) {
        this.messageDate = messageDate;
    }

    public Date getMessageTime() {
        return messageTime;
    }

    public void setMessageTime(Date messageTime) {
        this.messageTime = messageTime;
    }

    public Integer getMessageStatus() {
        return messageStatus;
    }

    public void setMessageStatus(Integer messageStatus) {
        this.messageStatus = messageStatus;
    }
}
