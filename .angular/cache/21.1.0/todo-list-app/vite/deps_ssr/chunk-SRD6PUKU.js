import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  NzIconDirective,
  NzIconModule
} from "./chunk-3QQT6N5S.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injectable,
  InjectionToken,
  Input,
  ViewEncapsulation,
  inject,
  require_cjs,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty
} from "./chunk-V2F66NLX.js";
import {
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-form.mjs
var import_rxjs = __toESM(require_cjs(), 1);
function NzFormItemFeedbackIconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "nz-icon", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("nzType", ctx_r0.iconType);
  }
}
var iconTypeMap = {
  error: "close-circle-fill",
  validating: "loading",
  success: "check-circle-fill",
  warning: "exclamation-circle-fill"
};
var NzFormItemFeedbackIconComponent = class _NzFormItemFeedbackIconComponent {
  cdr = inject(ChangeDetectorRef);
  status = "";
  iconType = null;
  ngOnChanges(_changes) {
    this.updateIcon();
  }
  updateIcon() {
    this.iconType = this.status ? iconTypeMap[this.status] : null;
    this.cdr.markForCheck();
  }
  static ɵfac = function NzFormItemFeedbackIconComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormItemFeedbackIconComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NzFormItemFeedbackIconComponent,
    selectors: [["nz-form-item-feedback-icon"]],
    hostAttrs: [1, "ant-form-item-feedback-icon"],
    hostVars: 8,
    hostBindings: function NzFormItemFeedbackIconComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("ant-form-item-feedback-icon-error", ctx.status === "error")("ant-form-item-feedback-icon-warning", ctx.status === "warning")("ant-form-item-feedback-icon-success", ctx.status === "success")("ant-form-item-feedback-icon-validating", ctx.status === "validating");
      }
    },
    inputs: {
      status: "status"
    },
    exportAs: ["nzFormFeedbackIcon"],
    features: [ɵɵNgOnChangesFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "nzType"]],
    template: function NzFormItemFeedbackIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵconditionalCreate(0, NzFormItemFeedbackIconComponent_Conditional_0_Template, 1, 1, "nz-icon", 0);
      }
      if (rf & 2) {
        ɵɵconditional(ctx.iconType ? 0 : -1);
      }
    },
    dependencies: [NzIconModule, NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemFeedbackIconComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item-feedback-icon",
      exportAs: "nzFormFeedbackIcon",
      imports: [NzIconModule],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (iconType) {
      <nz-icon [nzType]="iconType" />
    }
  `,
      host: {
        class: "ant-form-item-feedback-icon",
        "[class.ant-form-item-feedback-icon-error]": 'status==="error"',
        "[class.ant-form-item-feedback-icon-warning]": 'status==="warning"',
        "[class.ant-form-item-feedback-icon-success]": 'status==="success"',
        "[class.ant-form-item-feedback-icon-validating]": 'status==="validating"'
      }
    }]
  }], null, {
    status: [{
      type: Input
    }]
  });
})();
var NzFormNoStatusService = class _NzFormNoStatusService {
  noFormStatus = new import_rxjs.BehaviorSubject(false);
  static ɵfac = function NzFormNoStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormNoStatusService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NzFormNoStatusService,
    factory: _NzFormNoStatusService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormNoStatusService, [{
    type: Injectable
  }], null, null);
})();
var NZ_FORM_SIZE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-form-size" : "");
var NzFormStatusService = class _NzFormStatusService {
  formStatusChanges = new import_rxjs.ReplaySubject(1);
  static ɵfac = function NzFormStatusService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFormStatusService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NzFormStatusService,
    factory: _NzFormStatusService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormStatusService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/tslib/tslib.es6.mjs
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}

export {
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NZ_FORM_SIZE,
  NzFormStatusService,
  __esDecorate,
  __runInitializers
};
//# sourceMappingURL=chunk-SRD6PUKU.js.map
