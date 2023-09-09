Create table Users       
(  
   Id int(50) primary key not null,
   UserId varchar(50) not null,   
   Password varchar(100) not null    
)    
insert into Users (Id, UserId, Password) Values (1, 'tomek', 'tomek')