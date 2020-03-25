(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(n,e,o){o(467),o(660),o(1383),o(1334),o(1365),n.exports=o(1385)},1:function(n,e){},1383:function(n,e,o){"use strict";o.r(e);var t=o(80),a=o(465),r=Object(a.create)({base:"light",colorPrimary:"hotpink",colorSecondary:"deepskyblue",appBg:"rgb(36, 41, 46)",appContentBg:"rgb(38, 50, 56)",appBorderColor:"white",appBorderRadius:4,fontBase:'"Open Sans", sans-serif',fontCode:"monospace",textColor:"white",textInverseColor:"rgba(255,255,255,0.9)",barTextColor:"silver",barSelectedColor:"silver",barBg:"rgb(36, 41, 46)",inputBg:"white",inputBorder:"silver",inputTextColor:"silver",inputBorderRadius:4,brandTitle:"Concerto Web Editor",brandUrl:"https://hopeful-kare-8ad63f.netlify.com/"});t.addons.setConfig({theme:r})},1385:function(n,e,o){"use strict";o.r(e);var t=o(2),a=o.n(t),r=o(49),i=o(80),l=o(1371);o(1372),o(1374);o(1377),o(1378),i.addons.register("my/design-addon",(function(){i.addons.add("design-addon/panel",{title:"CODE",type:i.types.PANEL,render:function(n){var e=n.active,o=n.key;return a.a.createElement(r.AddonPanel,{active:e,key:o},a.a.createElement(l.UnControlled,{className:"CodeMirror",value:"namespace concerto.metamodel\n\nabstract concept DecoratorLiteral {\n}\n\nconcept DecoratorString extends DecoratorLiteral {\n  o String value  \n}\n\nconcept DecoratorNumber extends DecoratorLiteral {\n  o Double value\n}\n\nconcept DecoratorBoolean extends DecoratorLiteral {\n  o Boolean value\n}\n\nconcept TypeIdentifier {\n  o String fullyQualifiedName\n}\n\nconcept DecoratorIdentifier extends DecoratorLiteral {\n  o TypeIdentifier identifier\n  o Boolean isArray default=false\n}\n\nconcept Decorator {\n  o String name\n  o DecoratorLiteral[] arguments optional\n}\n\nabstract concept ClassDeclaration {\n  o Decorator[] decorators optional\n  o Boolean isAbstract default=false\n  o String identifier\n  o String identifiedByField optional\n  o TypeIdentifier superType optional\n}\n\nconcept AssetDeclaration extends ClassDeclaration {\n}\n\nconcept ParticipantDeclaration extends ClassDeclaration {\n}\n\nconcept TransactionDeclaration extends ClassDeclaration {\n}\n\nconcept EventDeclaration extends ClassDeclaration {\n}\n\nconcept ConceptDeclaration extends ClassDeclaration {\n}\n\n// TODO - enums do not support abstract or super types\nconcept EnumDeclaration extends ClassDeclaration {\n}\n\nconcept StringDefault {\n  o String value\n}\n\nconcept BooleanDefault {\n  o Boolean value\n}\n\nconcept IntegerDefault {\n  o Integer value\n}\n\nconcept RealDefault {\n  o Double value\n}\n\nabstract concept FieldDeclaration {\n  o String name\n  o Boolean isArray optional\n  o Boolean isOptional optional \n  o Decorator[] decorators optional\n}\n\nconcept ObjectFieldDeclaration extends FieldDeclaration {\n  o StringDefault defaultValue optional\n  o TypeIdentifier type\n}\n\nconcept BooleanFieldDeclaration extends FieldDeclaration {\n  o BooleanDefault defaultValue optional\n}\n\nconcept DateTimeFieldDeclaration extends FieldDeclaration {\n}\n\nconcept StringFieldDeclaration extends FieldDeclaration {\n  o StringDefault defaultValue optional\n  o StringRegexValidator validator optional\n}\n\nconcept StringRegexValidator {\n  o String regex\n}\n\nconcept RealDomainValidator {\n  o Double lower optional\n  o Double upper optional\n}\n\nconcept IntegerDomainValidator {\n  o Integer lower optional\n  o Integer upper optional\n}\n\nconcept RealFieldDeclaration extends FieldDeclaration {\n  o RealDefault defaultValue optional\n  o RealDomainValidator validator optional\n}\n\nconcept IntegerFieldDeclaration extends FieldDeclaration {\n  o IntegerDefault defaultValue optional\n  o IntegerDomainValidator validator optional\n}\n\nconcept RelationshipDeclaration extends FieldDeclaration {\n  o TypeIdentifier type\n}\n\nabstract concept Import {\n  o String uri optional\n}\n\nconcept NamespaceImport extends Import {\n  o String namespace\n}\n\nconcept TypeImport extends Import {\n  o TypeIdentifier identifier\n}\n\nconcept ModelFile {\n  o String namespace\n  o Import[] imports optional\n  o ClassDeclaration[] declarations optional\n}\n",options:{mode:"javascript",lineNumbers:!0,theme:"material"},onChange:function(){console.log("Changing code")}}))}})}))}},[[0,1,2]]]);