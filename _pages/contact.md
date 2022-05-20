---
layout: page
title: 联系猫咪
permalink: /contact
comments: false
---

<form action="https://formspree.io/{{site.email}}" method="POST">    
<p class="mb-4">使用喵语发送给 {{site.name}}. 喵喵也许会回复!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="喵名*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="E-mail*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="信息*" required></textarea>    
<input class="btn btn-dark" type="submit" value="Send">
</form>