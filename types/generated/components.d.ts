import type { Schema, Struct } from '@strapi/strapi';

export interface CommonHero extends Struct.ComponentSchema {
  collectionName: 'components_common_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    background: Schema.Attribute.String;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    host: Schema.Attribute.Enumeration<
      [
        'transient',
        'wic1w',
        'ssi1w',
        'medicaid1w',
        'medical1w',
        'calfresh1w',
        'snap1w',
        'ebt1w',
        'california',
        'main',
        'main1w',
        'byop1w',
        'sim1w',
        'tribal',
        'getlifeline',
        'gov1w',
        'excstep',
        'excstp',
        'hispanic1w',
        'infinitiex',
      ]
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    notice: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Offer varies by state. Must qualify.'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.hero': CommonHero;
    }
  }
}
