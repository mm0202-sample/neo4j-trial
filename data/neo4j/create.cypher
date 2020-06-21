CREATE (Taro:Person {id:'Taro', name:'Taro'})
CREATE (Yuji:Person {id:'Yuji', name:'Yuji'})
CREATE (Ichiro:Person {id:'Ichiro', name:'Ichiro'})
CREATE (Ziro:Person {id:'Ziro', name:'Ziro'})
CREATE (Saburo:Person {id:'Saburo', name:'Saburo'})
CREATE (Hanako:Person {id:'Hanako', name:'Hanako'})
CREATE (Takako:Person {id:'Takako', name:'Takako'})
CREATE (Tetsuko:Person {id:'Tetsuko', name:'Tetsuko'})
CREATE (Sizue:Person {id:'Sizue', name:'Sizue'})
CREATE (Tokie:Person {id:'Tokie', name:'Tokie'})
CREATE (Tomoko:Person {id:'Tomoko', name:'Tomoko'})

CREATE
  (Taro)- [:FOLLOW] - >(Saburo),
  (Taro)- [:FOLLOW] - >(Takako),
  (Yuji)- [:FOLLOW] - >(Sizue),
  (Ichiro)- [:FOLLOW] - >(Saburo),
  (Ziro)- [:FOLLOW] - >(Tetsuko),
  (Saburo)- [:FOLLOW] - >(Taro),
  (Saburo)- [:FOLLOW] - >(Hanako),
  (Hanako)- [:FOLLOW] - >(Tetsuko),
  (Takako)- [:FOLLOW] - >(Hanako),
  (Tetsuko)- [:FOLLOW] - >(Taro),
  (Tetsuko)- [:FOLLOW] - >(Sizue),
  (Tetsuko)- [:FOLLOW] - >(Tokie),
  (Tetsuko)- [:FOLLOW] - >(Yuji),
  (Sizue)- [:FOLLOW] - >(Taro),
  (Tokie)- [:FOLLOW] - >(Yuji),
  (Tokie)- [:FOLLOW] - >(Taro),
  (Tokie)- [:FOLLOW] - >(Takako)
