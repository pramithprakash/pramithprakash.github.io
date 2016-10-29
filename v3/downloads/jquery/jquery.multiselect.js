/*
 * jQuery MultiSelect UI Widget 1.9
 * Copyright (c) 2011 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
*/
(function(d){
    var o=0;
    d.widget("ech.multiselect",{
        options:{
            header:true,
            height:175,
            minWidth:225,
            classes:"",
            checkAllText:"Check all",
            uncheckAllText:"Uncheck all",
            noneSelectedText:"Select options",
            selectedText:"# selected",
            selectedList:0,
            show:"",
            hide:"",
            autoOpen:false,
            multiple:true,
            position:{}
    },
    _create:function(){
        var a=this.element.hide(),b=this.options;
        this.speed=d.fx.speeds._default;
        this._isOpen=false;
        a=(this.button=d('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(b.classes).attr({
            title:a.attr("title"), 
            "aria-haspopup":true
        }).insertAfter(a);
        (this.buttonlabel=d("<span />")).html(b.noneSelectedText).appendTo(a);
        a=(this.menu=d("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(b.classes).insertAfter(a);
        var e=(this.header=d("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(a);
        (this.headerLinkContainer=d("<ul />")).addClass("ui-helper-reset").html(function(){
            return b.header===true?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+ b.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+b.uncheckAllText+"</span></a></li>":typeof b.header==="string"?"<li>"+b.header+"</li>":""
            }).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(e);
        (this.checkboxContainer=d("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(a);
        this._bindEvents();
        this.refresh(true);
        b.multiple||a.addClass("ui-multiselect-single")
        },
    _init:function(){
        this.options.header===false&&this.header.hide();
        this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide();
        this.options.autoOpen&&this.open();
        this.element.is(":disabled")&&this.disable()
        },
    refresh:function(a){
        var b=this.options,e=this.menu,c=this.button,g=this.checkboxContainer,f=[],h=this.element.attr("id")||o++;
        g.empty();
        this.element.find("option").each(function(k){
            var i= d(this),m=i.html(),n=this.value;
            k=this.id||"ui-multiselect-"+h+"-option-"+k;
            var j=i.parent();
            i=i.is(":disabled");
            var l=["ui-corner-all"];
            if(j.is("optgroup")){
                j=j.attr("label");
                if(d.inArray(j,f)===-1){
                    d('<li><a href="#">'+j+"</a></li>").addClass("ui-multiselect-optgroup-label").appendTo(g);
                    f.push(j)
                    }
                }
            if(n.length>0){
            i&&l.push("ui-state-disabled");
            j=d("<li />").addClass(i?"ui-multiselect-disabled":"").appendTo(g);
            l=d("<label />").attr("for",k).addClass(l.join(" ")).appendTo(j);
            d('<input type="'+(b.multiple? "checkbox":"radio")+'" '+(this.selected?'checked="checked"':"")+' name="multiselect_'+h+'" />').attr({
                id:k,
                checked:this.selected,
                title:m,
                disabled:i,
                "aria-disabled":i,
                "aria-selected":this.selected
                }).val(n).appendTo(l).after("<span>"+m+"</span>")
            }
        });
    this.labels=e.find("label");
    this._setButtonWidth();
    this._setMenuWidth();
    c[0].defaultValue=this.update();
    a||this._trigger("refresh")
    },
update:function(){
    var a=this.options,b=this.labels.find("input"),e=b.filter(":checked"),c=e.length;
    a=c===0?a.noneSelectedText: d.isFunction(a.selectedText)?a.selectedText.call(this,c,b.length,e.get()):/\d/.test(a.selectedList)&&a.selectedList>0&&c<=a.selectedList?e.map(function(){
        return this.title
        }).get().join(", "):a.selectedText.replace("#",c).replace("#",b.length);
    this.buttonlabel.html(a);
    return a
    },
_bindEvents:function(){
    function a(){
        b[b._isOpen?"close":"open"]();
        return false
        }
        var b=this,e=this.button;
    e.find("span").bind("click.multiselect",a);
    e.bind({
        click:a,
        keypress:function(c){
            switch(c.which){
                case 27:case 38:case 37:
                    b.close();
                    break;
                case 39:case 40:
                    b.open()
                    }
                },
    mouseenter:function(){
        e.hasClass("ui-state-disabled")||d(this).addClass("ui-state-hover")
        },
    mouseleave:function(){
        d(this).removeClass("ui-state-hover")
        },
    focus:function(){
        e.hasClass("ui-state-disabled")||d(this).addClass("ui-state-focus")
        },
    blur:function(){
        d(this).removeClass("ui-state-focus")
        }
    });
this.header.delegate("a","click.multiselect",function(c){
    d(this).hasClass("ui-multiselect-close")?b.close():b[d(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]();
    c.preventDefault()
    });
this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(c){
    c.preventDefault();
    var g=d(this),f=g.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)");
    b._trigger("optgrouptoggle",c,{
        inputs:f.get(),
        label:g.parent().text(),
        checked:f[0].checked
        })!==false&&b._toggleChecked(f.filter(":checked").length!==f.length,f)
    }).delegate("label","mouseenter.multiselect",function(){
    if(!d(this).hasClass("ui-state-disabled")){
        b.labels.removeClass("ui-state-hover");
        d(this).addClass("ui-state-hover").find("input").focus()
        }
    }).delegate("label","keydown.multiselect",function(c){
    switch(c.which){
        case 9:case 27:
            b.close();
            break;
        case 38:case 40:case 37:case 39:
            b._traverse(c.which,this);
            c.preventDefault();
            break;
        case 13:
            c.preventDefault();
            d(this).find("input")[0].click()
            }
        }).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(c){
    var g=d(this),f=this.value,h=this.checked,k=b.element.find("option");
    if(g.is(":disabled")||b._trigger("click", c,{
        value:f,
        text:this.title,
        checked:h
    })===false)c.preventDefault();
    else{
        g.attr("aria-selected",h);
        k.filter(function(){
            return this.value===f
            }).attr("selected",h?"selected":"");
        if(!b.options.multiple){
            k.not(function(){
                return this.value===f
                }).removeAttr("selected");
            b.labels.removeClass("ui-state-active");
            g.closest("label").toggleClass("ui-state-active",h);
            b.close()
            }
            setTimeout(d.proxy(b.update,b),10)
        }
    });
d(document).bind("mousedown.multiselect",function(c){
    b._isOpen&&!d.contains(b.menu[0],c.target)&&c.target!== b.button[0]&&b.close()
    });
d(this.element[0].form).bind("reset.multiselect",function(){
    setTimeout(function(){
        b.update()
        },10)
    })
},
_setButtonWidth:function(){
    var a=this.element.outerWidth(),b=this.options;
    if(/\d/.test(b.minWidth)&&a<b.minWidth)a=b.minWidth;
    this.button.width(a)
    },
_setMenuWidth:function(){
    var a=this.menu,b=this.button.outerWidth()-parseInt(a.css("padding-left"),10)-parseInt(a.css("padding-right"),10)-parseInt(a.css("border-right-width"),10)-parseInt(a.css("border-left-width"),10);
    a.width(b|| this.button.outerWidth())
    },
_traverse:function(a,b){
    var e=d(b),c=a===38||a===37;
    e=e.parent()[c?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[c?"last":"first"]();
    if(e.length)e.find("label").trigger("mouseover");
    else{
        e=this.menu.find("ul:last");
        this.menu.find("label")[c?"last":"first"]().trigger("mouseover");
        e.scrollTop(c?e.height():0)
        }
    },
_toggleChecked:function(a,b){
    var e=b&&b.length?b:this.labels.find("input");
    e.not(":disabled").attr({
        checked:a,
        "aria-selected":a
    });
    this.update();
    var c=e.map(function(){
        return this.value
        }).get();
    this.element.find("option").filter(function(){
        return!this.disabled&&d.inArray(this.value,c)>-1
        }).attr({
        selected:a,
        "aria-selected":a
    })
    },
_toggleDisabled:function(a){
    this.button.attr({
        disabled:a,
        "aria-disabled":a
    })[a?"addClass":"removeClass"]("ui-state-disabled");
    this.menu.find("input").attr({
        disabled:a,
        "aria-disabled":a
        }).parent()[a?"addClass":"removeClass"]("ui-state-disabled");
    this.element.attr({
        disabled:a,
        "aria-disabled":a
    })
    },
open:function(){
    var a= this.button,b=this.menu,e=this.speed,c=this.options;
    if(!(this._trigger("beforeopen")===false||a.hasClass("ui-state-disabled")||this._isOpen)){
        var g=b.find("ul:last"),f=c.show,h=a.position();
        if(d.isArray(c.show)){
            f=c.show[0];
            e=c.show[1]||this.speed
            }
            g.scrollTop(0).height(c.height);
        if(d.ui.position&&!d.isEmptyObject(c.position)){
            c.position.of=c.position.of||a;
            b.show().position(c.position).hide().show(f,e)
            }else b.css({
            top:h.top+a.outerHeight(),
            left:h.left
            }).show(f,e);
        this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");
        a.addClass("ui-state-active");
        this._isOpen=true;
        this._trigger("open")
        }
    },
close:function(){
    if(this._trigger("beforeclose")!==false){
        var a=this.options,b=a.hide,e=this.speed;
        if(d.isArray(a.hide)){
            b=a.hide[0];
            e=a.hide[1]||this.speed
            }
            this.menu.hide(b,e);
        this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");
        this._trigger("close");
        this._isOpen=false
        }
    },
enable:function(){
    this._toggleDisabled(false)
    },
disable:function(){
    this._toggleDisabled(true)
    },
checkAll:function(){
    this._toggleChecked(true);
    this._trigger("checkAll")
    },
uncheckAll:function(){
    this._toggleChecked(false);
    this._trigger("uncheckAll")
    },
getChecked:function(){
    return this.menu.find("input").filter(":checked")
    },
destroy:function(){
    d.Widget.prototype.destroy.call(this);
    this.button.remove();
    this.menu.remove();
    this.element.show();
    return this
    },
isOpen:function(){
    return this._isOpen
    },
widget:function(){
    return this.menu
    },
_setOption:function(a,b){
    var e=this.menu;
    switch(a){
        case "header":
            e.find("div.ui-multiselect-header")[b?"show":"hide"]();
            break;
        case "checkAllText":
            e.find("a.ui-multiselect-all span").eq(-1).text(b);
            break;
        case "uncheckAllText":
            e.find("a.ui-multiselect-none span").eq(-1).text(b);
            break;
        case "height":
            e.find("ul:last").height(parseInt(b,10));
            break;
        case "minWidth":
            this.options[a]=parseInt(b,10);
            this._setButtonWidth();
            this._setMenuWidth();
            break;
        case "selectedText":case "selectedList":case "noneSelectedText":
            this.options[a]=b;
            this.update();
            break;
        case "classes":
            e.add(this.button).removeClass(this.options.classes).addClass(b)
            }
            d.Widget.prototype._setOption.apply(this, arguments)
    }
})
})(jQuery);