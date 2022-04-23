/* Generated by JSIL v0.8.2 build 30747. See http://jsil.org/ for more information. */ 
'use strict';
var $asm_CSharpXamlForHtml5_System_Xaml_dll = JSIL.DeclareAssembly("CSharpXamlForHtml5.System.Xaml.dll, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("System");
JSIL.DeclareNamespace("System.Windows");
JSIL.DeclareNamespace("System.Windows.Markup");
/* class System.Windows.Markup.ContentPropertyAttribute */ 

(function ContentPropertyAttribute$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm_mscorlib.System.Attribute)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm_mscorlib.System.String)) ();
  };

  function ContentPropertyAttribute__ctor$00 () {
    $T00().prototype['_ctor'].call(this);
  };

  function ContentPropertyAttribute__ctor$01 (name) {
    $T00().prototype['_ctor'].call(this);
    this.ContentPropertyAttribute$Name$value = name;
  };

  function ContentPropertyAttribute_get_Name () {
    return this.ContentPropertyAttribute$Name$value;
  };

  function ContentPropertyAttribute_set_Name (value) {
    this.ContentPropertyAttribute$Name$value = value;
  };

  JSIL.MakeType({
      BaseType: $asm_mscorlib.TypeRef("System.Attribute"), 
      Name: "System.Windows.Markup.ContentPropertyAttribute", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      ContentPropertyAttribute__ctor$00
    );

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($.String), 
      ContentPropertyAttribute__ctor$01
    );

    $.Method({Static:false, Public:true }, "get_Name", 
      JSIL.MethodSignature.Return($.String), 
      ContentPropertyAttribute_get_Name
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $.Method({Static:false, Public:true }, "set_Name", 
      JSIL.MethodSignature.Action($.String), 
      ContentPropertyAttribute_set_Name
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $['Field']({Static:false, Public:false}, "ContentPropertyAttribute$Name$value", $.String)
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute")); 
    $.Property({Static:false, Public:true }, "Name", $.String);

    $.ImplementInterfaces(
    );

    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm_mscorlib.TypeRef("System.AttributeUsageAttribute"), function () { return [$asm_mscorlib.System.AttributeTargets.Class]; });

})();

/* class System.Windows.Markup.ContentWrapperAttribute */ 

(function ContentWrapperAttribute$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm_mscorlib.System.Type)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm_mscorlib.System.Attribute)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm_mscorlib.System.Object)) ();
  };

  function ContentWrapperAttribute__ctor (contentWrapper) {
    $T01().prototype['_ctor'].call(this);
    this._contentWrapper = contentWrapper;
  };

  function ContentWrapperAttribute_Object_Equals (obj) {
    var contentWrapperAttribute = $thisType.$As(obj);
    return ((contentWrapperAttribute !== null) && $T00()['op_Equality'](this._contentWrapper, contentWrapperAttribute._contentWrapper));
  };

  function ContentWrapperAttribute_get_ContentWrapper () {
    return this._contentWrapper;
  };

  function ContentWrapperAttribute_get_TypeId () {
    return this;
  };

  function ContentWrapperAttribute_GetHashCode () {
    return JSIL.ObjectHashCode(this._contentWrapper, !false, $T02().__Type__);
  };

  JSIL.MakeType({
      BaseType: $asm_mscorlib.TypeRef("System.Attribute"), 
      Name: "System.Windows.Markup.ContentWrapperAttribute", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($asm_mscorlib.TypeRef("System.Type")), 
      ContentWrapperAttribute__ctor
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Object.Equals", 
      new JSIL.MethodSignature($.Boolean, [$.Object]), 
      ContentWrapperAttribute_Object_Equals
    );

    $.Method({Static:false, Public:true }, "get_ContentWrapper", 
      JSIL.MethodSignature.Return($asm_mscorlib.TypeRef("System.Type")), 
      ContentWrapperAttribute_get_ContentWrapper
    );

    $.Method({Static:false, Public:true , Virtual:true }, "get_TypeId", 
      JSIL.MethodSignature.Return($.Object), 
      ContentWrapperAttribute_get_TypeId
    );

    $.Method({Static:false, Public:true , Virtual:true }, "GetHashCode", 
      JSIL.MethodSignature.Return($.Int32), 
      ContentWrapperAttribute_GetHashCode
    );

    $['Field']({Static:false, Public:false}, "_contentWrapper", $asm_mscorlib.TypeRef("System.Type")); 
    $.Property({Static:false, Public:true }, "ContentWrapper", $asm_mscorlib.TypeRef("System.Type"));

    $.Property({Static:false, Public:true , Virtual:true }, "TypeId", $.Object);

    $.ImplementInterfaces(
    );

    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm_mscorlib.TypeRef("System.AttributeUsageAttribute"), function () { return [$asm_mscorlib.System.AttributeTargets.Class]; });

})();

/* interface System.Windows.Markup.IProvideValueTarget */ 

JSIL.MakeInterface(
  "System.Windows.Markup.IProvideValueTarget", true, [], function ($) {
    $.Method({}, "get_TargetObject", JSIL.MethodSignature.Return($.Object));
    $.Method({}, "get_TargetProperty", JSIL.MethodSignature.Return($.Object));
    $.Property({}, "TargetObject");
    $.Property({}, "TargetProperty");
  }, []);

/* class System.Windows.Markup.MarkupExtension */ 

(function MarkupExtension$Members () {
  var $, $thisType;
  function MarkupExtension__ctor () {
  };

  JSIL.MakeType({
      BaseType: $asm_mscorlib.TypeRef("System.Object"), 
      Name: "System.Windows.Markup.MarkupExtension", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:false}, ".ctor", 
      JSIL.MethodSignature.Void, 
      MarkupExtension__ctor
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class System.Windows.Markup.XmlnsDefinitionAttribute */ 

(function XmlnsDefinitionAttribute$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm_mscorlib.System.String)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm_mscorlib.System.Attribute)) ();
  };

  function XmlnsDefinitionAttribute__ctor (xmlNamespace, clrNamespace) {
    $T01().prototype['_ctor'].call(this);
    this.XmlnsDefinitionAttribute$XmlNamespace$value = xmlNamespace;
    this.XmlnsDefinitionAttribute$ClrNamespace$value = clrNamespace;
  };

  function XmlnsDefinitionAttribute_get_AssemblyName () {
    return this.XmlnsDefinitionAttribute$AssemblyName$value;
  };

  function XmlnsDefinitionAttribute_get_ClrNamespace () {
    return this.XmlnsDefinitionAttribute$ClrNamespace$value;
  };

  function XmlnsDefinitionAttribute_get_XmlNamespace () {
    return this.XmlnsDefinitionAttribute$XmlNamespace$value;
  };

  function XmlnsDefinitionAttribute_set_AssemblyName (value) {
    this.XmlnsDefinitionAttribute$AssemblyName$value = value;
  };

  function XmlnsDefinitionAttribute_set_ClrNamespace (value) {
    this.XmlnsDefinitionAttribute$ClrNamespace$value = value;
  };

  function XmlnsDefinitionAttribute_set_XmlNamespace (value) {
    this.XmlnsDefinitionAttribute$XmlNamespace$value = value;
  };

  JSIL.MakeType({
      BaseType: $asm_mscorlib.TypeRef("System.Attribute"), 
      Name: "System.Windows.Markup.XmlnsDefinitionAttribute", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 2, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      new JSIL.MethodSignature(null, [$.String, $.String]), 
      XmlnsDefinitionAttribute__ctor
    );

    $.Method({Static:false, Public:true }, "get_AssemblyName", 
      JSIL.MethodSignature.Return($.String), 
      XmlnsDefinitionAttribute_get_AssemblyName
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $.Method({Static:false, Public:true }, "get_ClrNamespace", 
      JSIL.MethodSignature.Return($.String), 
      XmlnsDefinitionAttribute_get_ClrNamespace
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $.Method({Static:false, Public:true }, "get_XmlNamespace", 
      JSIL.MethodSignature.Return($.String), 
      XmlnsDefinitionAttribute_get_XmlNamespace
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $.Method({Static:false, Public:true }, "set_AssemblyName", 
      JSIL.MethodSignature.Action($.String), 
      XmlnsDefinitionAttribute_set_AssemblyName
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $.Method({Static:false, Public:true }, "set_ClrNamespace", 
      JSIL.MethodSignature.Action($.String), 
      XmlnsDefinitionAttribute_set_ClrNamespace
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $.Method({Static:false, Public:true }, "set_XmlNamespace", 
      JSIL.MethodSignature.Action($.String), 
      XmlnsDefinitionAttribute_set_XmlNamespace
    )
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

    $['Field']({Static:false, Public:false}, "XmlnsDefinitionAttribute$AssemblyName$value", $.String)
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute")); 
    $['Field']({Static:false, Public:false}, "XmlnsDefinitionAttribute$XmlNamespace$value", $.String)
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute")); 
    $['Field']({Static:false, Public:false}, "XmlnsDefinitionAttribute$ClrNamespace$value", $.String)
      .Attribute($asm_mscorlib.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute")); 
    $.Property({Static:false, Public:true }, "AssemblyName", $.String);

    $.Property({Static:false, Public:true }, "XmlNamespace", $.String);

    $.Property({Static:false, Public:true }, "ClrNamespace", $.String);

    $.ImplementInterfaces(
    );

    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm_mscorlib.TypeRef("System.AttributeUsageAttribute"), function () { return [$asm_mscorlib.System.AttributeTargets.Assembly]; });

})();

