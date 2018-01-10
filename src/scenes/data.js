
var levels = [];

var level;
var map;
var scene;
var room;
var person;
var object;
var porthole;
var wildcard;
var view;
var zone;
var option;
var lock;

var init_levels = function()
{

level = new level();
level.id = "l1";
level.fqid = "l1";
{
map = new map();
map.id = "map";
map.fqid = "l1.map";
{
map.img = GenImg("assets/data//levels/l1/map/map.png");
scene = new scene();
scene.id = "capitol";
scene.fqid = "l1.map.capitol";
{
scene.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol.png");
scene.x = 100;
scene.y = 100;
scene.w = 100;
scene.h = 100;
room = new room();
room.id = "entrance";
room.fqid = "l1.map.capitol.entrance";
{
room.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance.png");
room.nav_x = 100;
room.nav_y = canv.height/2;
room.nav_w = canv.width-200;
room.nav_h = canv.height/2-100;
room.start_x = canv.width/2;
room.start_y = canv.height/2;
person = new person();
person.id = "uncle";
person.id = "l1.map.capitol.entrance.uncle";
{
person.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance/persons/uncle.png");
person.x = 70;
person.y = canv.height/2-100;
person.w = 100;
person.h = 120;
}
room.persons.push(person);
object = new object();
object.id = "book";
object.fqid = "l1.map.capitol.entrance.book";
{
object.x = canv.width-200;
object.y = 100;
object.w = 80;
object.h = 80;
view = new view();
view.id = "front";
view.fqid = "l1.map.capitol.entrance.book.front";
{
view.img = GenImg("assets/data//levels/l1/map/map/scenes/capitol/rooms/entrance/objects/book/views/front.png");
}
object.views.push(view);
}
room.objects.push(object);
porthole = new porthole();
porthole.id = "door";
porthole.fqid = "l1.map.capitol.entrance.door";
{
porthole.x = canv.width/2-50;
porthole.y = canv.height/2-50;
porthole.w = 100;
porthole.h = 100;
}
room.portholes.push(porthole);
}
scene.rooms.push(room);
}
map.scenes.push(scene);
scene = new scene();
scene.id = "library";
scene.fqid = "l1.map.library";
{
scene.img = GenImg("assets/data//levels/l1/map/map/scenes/library.png");
scene.x = 100;
scene.y = 100;
scene.w = 100;
scene.h = 100;
}
map.scenes.push(scene);
}
level.map = map;
}
levels.push(level);
}

