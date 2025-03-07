import type { Schema, Struct } from '@strapi/strapi';

export interface HomepageHeroHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_home_heroes';
  info: {
    displayName: 'homeHero';
    icon: 'command';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface HomepageHeroHomePageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_home_page_heroes';
  info: {
    displayName: 'HomePage Hero';
    icon: 'layout';
  };
  attributes: {
    Background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Intro: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Notice: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'homepage-hero.home-hero': HomepageHeroHomeHero;
      'homepage-hero.home-page-hero': HomepageHeroHomePageHero;
    }
  }
}
