System.register(['angular2/core', 'angular2/router', '../AnimationComponent'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, AnimationComponent_1;
    var TodoItem;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (AnimationComponent_1_1) {
                AnimationComponent_1 = AnimationComponent_1_1;
            }],
        execute: function() {
            TodoItem = (function (_super) {
                __extends(TodoItem, _super);
                function TodoItem(elRef, renderer) {
                    _super.call(this, elRef, renderer);
                    this.elRef = elRef;
                    this.renderer = renderer;
                    this.toggleDone = new core_1.EventEmitter();
                    this.remove = new core_1.EventEmitter();
                }
                TodoItem.prototype.onChange = function (e) {
                    this.todo.done = e.target.checked;
                    this.toggleDone.emit(this.todo);
                };
                TodoItem.prototype.onRemoveBtnClick = function () {
                    this.remove.emit(this.todo.ID);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "todo", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TodoItem.prototype, "animation", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TodoItem.prototype, "direction", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], TodoItem.prototype, "delay", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "toggleDone", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], TodoItem.prototype, "remove", void 0);
                TodoItem = __decorate([
                    core_1.Component({
                        selector: 'todo-item',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        host: {
                            'class': 'list-group-item clearfix',
                            '[id]': 'todo.ID'
                        },
                        template: "\n    <div class=\"col-md-1\">\n        <input type=\"checkbox\" [(ngModel)]=\"todo.done\" (change)=\"onChange($event)\">\n      </div>\n\n      <div class=\"col-md-3\">\n        <a [routerLink]=\"['TodoDetail',{id:todo.ID}]\">\n          <strong>{{todo.name}}</strong>\n        </a>\n      </div>\n\n      <div class=\"col-md-2\">\n        <span>{{todo.createAt|myDate}}</span>\n      </div>\n\n      <div class=\"col-md-2 col-md-offset-4\">\n        <button class=\"btn btn-danger btn-xs\" (click)=\"onRemoveBtnClick()\">remove</button>\n      </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], TodoItem);
                return TodoItem;
            })(AnimationComponent_1.AnimationComponent);
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=todo.item.js.map