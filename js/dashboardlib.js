function Dashboard(id) {
	this.id = "";
	if (id !== undefined)
		this.id = "#" + id;
		
	this.height = 0;
	this.width = 0;
	this.svg = null;
	this.margin = {top:0, right:0, bottom:0, left:0};

}

Dashboard.prototype.getSvgId = function() {
	return this.id;
}

Dashboard.prototype.setSvgId = function(id) {
	this.id = "#" + id;
}

Dashboard.prototype.getParentSize = function() {
	return {
		height: $(this.id).parent().height(),
		width: $(this.id).parent().width()
	};
}

Dashboard.prototype.getMargin = function() {
	return this.margin;
}

Dashboard.prototype.setMargin = function(m) {
	if (m.top !== undefined)
		this.margin['top'] = m.top;
	if (m.right !== undefined)
		this.margin['right'] = m.right;
	if (m.bottom !== undefined)
		this.margin['bottom'] = m.bottom;
	if (m.left !== undefined)
		this.margin['left'] = m.left;
}

Dashboard.prototype.makeSvg = function() {
	this.svg = d3.select(this.id)
			.attr("width", this.width)
			.attr("height", this.height)
}
