var game = 
{
	canvas:false,
	tx:false,
	init: function()
	{
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');	
		this.canvas.setAttribute('width', window.innerWidth);
		this.canvas.setAttribute('height', window.innerHeight);
		
		
		game.enemies.create(10);
		game.towers.create(200,100,20,'rgb(0,0,250)')
		
		setInterval(game.update, 1000/30);
		
		
		window.requestAnimationFrame(game.draw);
	},
	update: function()
	{
		game.mapEntities.update();
	},
	draw: function()
	{
		game.ctx.clearRect(0,0,game.canvas.width, game.canvas.height);
		
		game.map.draw();
		
		//game.drawCircle(100,100,5,'rgb(250,0,0)');
		//game.drawCircle(100,150,20,'rgb(0,0,250)');
		game.mapEntities.draw();
		
		
		window.requestAnimationFrame(game.draw);
	},
	drawCircle: function(x,y,r,color)
	{
		game.ctx.beginPath();
		game.ctx.arc(x,y,r,0,2*Math.PI);
		game.ctx.fillStyle = color;
		game.ctx.fill();
	}
};

game.map = 
{
	waypoints:
	[
		{x: 0, y: 100},
		{x: 700, y: 100},
		{x: 700, y: 300},
		{x: 100, y: 300},
		{x: 100, y: 500},
		{x: 300, y: 500},
		{x: 800, y: 500},
		/*{x: 0, y: 100},
		{x: 100, y: 100},
		{x: 100, y: 300},
		{x: 300, y: 300},
		{x: 300, y: 100},
		{x: 500, y: 100},
		{x: 500, y: 500},
		{x: 700, y: 500},
		{x: 700, y: 400},
		{x: 800, y: 400},*/
		
	],
	draw:function()
	{
		game.ctx.fillStyle = 'rgb(100,100,100)';
		game.ctx.fillRect(0,0,game.canvas.width,game.canvas.height);
		
		game.ctx.save();
		game.ctx.beginPath();
		game.ctx.strokeStyle = 'rgb(170,170,170)';
		game.ctx.lineWidth = 80;
		
		game.ctx.moveTo(
			game.map.waypoints[0].x,
			game.map.waypoints[0].y
		);
		
		for(let i = 1; i < game.map.waypoints.length; i++)
		{
				game.ctx.lineTo(game.map.waypoints[i].x, game.map.waypoints[i].y)
		}
		game.ctx.stroke();
		game.ctx.restore();
	}
}

game.towers = {
	create: function(x,y)
	{
		var entity = game.mapEntities.create(x,y,20,'rgb(0,0,250)');
		entity.type = 'tower';
		entity.update = function(){};
		return entity;
	}
		
}

game.enemies = {
	create: function(level)
	{
		var entity = game.mapEntities.create(0,0,level,'rgb(250,0,0)');
		entity.type = 'enemy';
		entity.speed = 1;
		entity.level = level;
		entity.velocity = {x:entity.speed,y:entity.speed};
		entity.update = function()
		{
			this.x += entity.velocity.x;
			this.y += entity.velocity.y;
		}
	}
}

game.mapEntities =
{
	list: {},
	idCounter:0,
	init:function(){},
	create: function(x,y,r,color)
	{
		var entity = 
		{
			id: ++this.idCounter,
			x:x,
			y:y,
			r:r,
			color:color,
			update: function()
			{
				this.x++;
				this.y++;
			},
			draw: function()
			{
				game.drawCircle(this.x, this.y, this.r, this.color);
			},
		};
		this.list[entity.id] = entity;
		return entity;
	},
	update:function()
	{	 
		for (i in this.list) this.list[i].update(); 
	},
	draw:function()
	{
		for (i in this.list) this.list[i].draw();
	},
	 
}