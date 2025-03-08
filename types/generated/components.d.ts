import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHeroHomePageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_home_page_heroes';
  info: {
    description: '';
    displayName: 'HomePage Hero';
    icon: 'layout';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzMwMTQzOTksImp0aSI6ImVhY2E4MTA2LTc5OTEtNGVlYi1hMTdjLTg5MGJiM2RkZjdjZiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiXSwiZmVhdHVyZXMiOlsiRFJVUCJdLCJ2YyI6ImY0NDg2MGU1In0.kfEGvN1-qfW0IfmDD2v75ay8Lo0P8eAPHIDmZ5wPHumxxCo9S63qZ1Bc3NV-s80l_AjEJDsPpmZHwBOezKpWfw';
          output: 'HTML';
          preset: 'rich';
        }
      >;
    notice: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage-hero.home-page-hero': HomepageHeroHomePageHero;
    }
  }
}
