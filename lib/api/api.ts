/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export namespace PageHome {
  /**
   * No description
   * @tags Page-home
   * @name PageHomeList
   * @request GET:/page-home
   * @secure
   */
  export namespace PageHomeList {
    export type RequestParams = {};
    export type RequestQuery = {
      sort?: string;
      "pagination[withCount]"?: boolean;
      "pagination[page]"?: number;
      "pagination[pageSize]"?: number;
      "pagination[start]"?: number;
      "pagination[limit]"?: number;
      fields?: string;
      populate?: string;
    };
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          h1?: string;
          seo?: {
            id?: string;
            metaTitle?: string;
            metaDescription?: string;
            metaImage?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: { data?: { id?: string; attributes?: object }[] };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: { data?: { id?: string; attributes?: object }[] };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: { data?: { id?: string; attributes?: object } };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: { data?: { id?: string; attributes?: object } };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                      };
                    };
                  };
                  updatedBy?: { data?: { id?: string; attributes?: object } };
                  sitemap_exclude?: boolean;
                };
              };
            };
            metaSocial?: {
              id?: string;
              socialNetwork?: "Facebook" | "Twitter";
              title?: string;
              description?: string;
              image?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                    sitemap_exclude?: boolean;
                  };
                };
              };
            }[];
            keywords?: string;
            metaRobots?: string;
            structuredData?: any;
            metaViewport?: string;
            canonicalURL?: string;
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          localizations?: {
            data?: {
              id?: string;
              attributes?: {
                h1?: string;
                seo?: {
                  id?: string;
                  metaTitle?: string;
                  metaDescription?: string;
                  metaImage?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              firstname?: string;
                              lastname?: string;
                              username?: string;
                              email?: string;
                              resetPasswordToken?: string;
                              registrationToken?: string;
                              isActive?: boolean;
                              roles?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: { data?: { id?: string; attributes?: object }[] };
                                    permissions?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          action?: string;
                                          subject?: string;
                                          properties?: any;
                                          conditions?: any;
                                          role?: { data?: { id?: string; attributes?: object } };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              blocked?: boolean;
                              preferedLanguage?: string;
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                  metaSocial?: {
                    id?: string;
                    socialNetwork?: "Facebook" | "Twitter";
                    title?: string;
                    description?: string;
                    image?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                  }[];
                  keywords?: string;
                  metaRobots?: string;
                  structuredData?: any;
                  metaViewport?: string;
                  canonicalURL?: string;
                };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
                localizations?: { data?: { id?: string; attributes?: object }[] };
                locale?: string;
                sitemap_exclude?: boolean;
              };
            }[];
          };
          locale?: string;
          sitemap_exclude?: boolean;
        };
      }[];
      meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
    };
  }
  /**
   * No description
   * @tags Page-home
   * @name PageHomeUpdate
   * @request PUT:/page-home
   * @secure
   */
  export namespace PageHomeUpdate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      data?: {
        h1?: string;
        seo?: {
          metaTitle?: string;
          metaDescription?: string;
          metaImage?: number | string;
          metaSocial?: {
            socialNetwork?: "Facebook" | "Twitter";
            title?: string;
            description?: string;
            image?: number | string;
          }[];
          keywords?: string;
          metaRobots?: string;
          structuredData?: any;
          metaViewport?: string;
          canonicalURL?: string;
        };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: number | string;
        updatedBy?: number | string;
        localizations?: (number | string)[];
        locale?: string;
        sitemap_exclude?: boolean;
      };
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          h1?: string;
          seo?: {
            id?: string;
            metaTitle?: string;
            metaDescription?: string;
            metaImage?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: { data?: { id?: string; attributes?: object }[] };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: { data?: { id?: string; attributes?: object }[] };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: { data?: { id?: string; attributes?: object } };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: { data?: { id?: string; attributes?: object } };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                      };
                    };
                  };
                  updatedBy?: { data?: { id?: string; attributes?: object } };
                  sitemap_exclude?: boolean;
                };
              };
            };
            metaSocial?: {
              id?: string;
              socialNetwork?: "Facebook" | "Twitter";
              title?: string;
              description?: string;
              image?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                    sitemap_exclude?: boolean;
                  };
                };
              };
            }[];
            keywords?: string;
            metaRobots?: string;
            structuredData?: any;
            metaViewport?: string;
            canonicalURL?: string;
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          localizations?: {
            data?: {
              id?: string;
              attributes?: {
                h1?: string;
                seo?: {
                  id?: string;
                  metaTitle?: string;
                  metaDescription?: string;
                  metaImage?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              firstname?: string;
                              lastname?: string;
                              username?: string;
                              email?: string;
                              resetPasswordToken?: string;
                              registrationToken?: string;
                              isActive?: boolean;
                              roles?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: { data?: { id?: string; attributes?: object }[] };
                                    permissions?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          action?: string;
                                          subject?: string;
                                          properties?: any;
                                          conditions?: any;
                                          role?: { data?: { id?: string; attributes?: object } };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              blocked?: boolean;
                              preferedLanguage?: string;
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                  metaSocial?: {
                    id?: string;
                    socialNetwork?: "Facebook" | "Twitter";
                    title?: string;
                    description?: string;
                    image?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                  }[];
                  keywords?: string;
                  metaRobots?: string;
                  structuredData?: any;
                  metaViewport?: string;
                  canonicalURL?: string;
                };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
                localizations?: { data?: { id?: string; attributes?: object }[] };
                locale?: string;
                sitemap_exclude?: boolean;
              };
            }[];
          };
          locale?: string;
          sitemap_exclude?: boolean;
        };
      };
      meta?: object;
    };
  }
  /**
   * No description
   * @tags Page-home
   * @name PageHomeDelete
   * @request DELETE:/page-home
   * @secure
   */
  export namespace PageHomeDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = number;
  }
  /**
   * No description
   * @tags Page-home
   * @name LocalizationsCreate
   * @request POST:/page-home/localizations
   * @secure
   */
  export namespace LocalizationsCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      data?: {
        h1?: string;
        seo?: {
          metaTitle?: string;
          metaDescription?: string;
          metaImage?: number | string;
          metaSocial?: {
            socialNetwork?: "Facebook" | "Twitter";
            title?: string;
            description?: string;
            image?: number | string;
          }[];
          keywords?: string;
          metaRobots?: string;
          structuredData?: any;
          metaViewport?: string;
          canonicalURL?: string;
        };
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        createdBy?: number | string;
        updatedBy?: number | string;
        localizations?: (number | string)[];
        locale?: string;
        sitemap_exclude?: boolean;
      };
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          h1?: string;
          seo?: {
            id?: string;
            metaTitle?: string;
            metaDescription?: string;
            metaImage?: {
              data?: {
                id?: string;
                attributes?: {
                  name?: string;
                  alternativeText?: string;
                  caption?: string;
                  width?: number;
                  height?: number;
                  formats?: any;
                  hash?: string;
                  ext?: string;
                  mime?: string;
                  size?: number;
                  url?: string;
                  previewUrl?: string;
                  provider?: string;
                  provider_metadata?: any;
                  related?: { data?: { id?: string; attributes?: object }[] };
                  createdAt?: string;
                  updatedAt?: string;
                  createdBy?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        firstname?: string;
                        lastname?: string;
                        username?: string;
                        email?: string;
                        resetPasswordToken?: string;
                        registrationToken?: string;
                        isActive?: boolean;
                        roles?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              code?: string;
                              description?: string;
                              users?: { data?: { id?: string; attributes?: object }[] };
                              permissions?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    action?: string;
                                    subject?: string;
                                    properties?: any;
                                    conditions?: any;
                                    role?: { data?: { id?: string; attributes?: object } };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          }[];
                        };
                        blocked?: boolean;
                        preferedLanguage?: string;
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: { data?: { id?: string; attributes?: object } };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                      };
                    };
                  };
                  updatedBy?: { data?: { id?: string; attributes?: object } };
                  sitemap_exclude?: boolean;
                };
              };
            };
            metaSocial?: {
              id?: string;
              socialNetwork?: "Facebook" | "Twitter";
              title?: string;
              description?: string;
              image?: {
                data?: {
                  id?: string;
                  attributes?: {
                    name?: string;
                    alternativeText?: string;
                    caption?: string;
                    width?: number;
                    height?: number;
                    formats?: any;
                    hash?: string;
                    ext?: string;
                    mime?: string;
                    size?: number;
                    url?: string;
                    previewUrl?: string;
                    provider?: string;
                    provider_metadata?: any;
                    related?: { data?: { id?: string; attributes?: object }[] };
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          firstname?: string;
                          lastname?: string;
                          username?: string;
                          email?: string;
                          resetPasswordToken?: string;
                          registrationToken?: string;
                          isActive?: boolean;
                          roles?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                name?: string;
                                code?: string;
                                description?: string;
                                users?: { data?: { id?: string; attributes?: object }[] };
                                permissions?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      action?: string;
                                      subject?: string;
                                      properties?: any;
                                      conditions?: any;
                                      role?: { data?: { id?: string; attributes?: object } };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          blocked?: boolean;
                          preferedLanguage?: string;
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      };
                    };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                    sitemap_exclude?: boolean;
                  };
                };
              };
            }[];
            keywords?: string;
            metaRobots?: string;
            structuredData?: any;
            metaViewport?: string;
            canonicalURL?: string;
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          localizations?: {
            data?: {
              id?: string;
              attributes?: {
                h1?: string;
                seo?: {
                  id?: string;
                  metaTitle?: string;
                  metaDescription?: string;
                  metaImage?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              firstname?: string;
                              lastname?: string;
                              username?: string;
                              email?: string;
                              resetPasswordToken?: string;
                              registrationToken?: string;
                              isActive?: boolean;
                              roles?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: { data?: { id?: string; attributes?: object }[] };
                                    permissions?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          action?: string;
                                          subject?: string;
                                          properties?: any;
                                          conditions?: any;
                                          role?: { data?: { id?: string; attributes?: object } };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              blocked?: boolean;
                              preferedLanguage?: string;
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                  metaSocial?: {
                    id?: string;
                    socialNetwork?: "Facebook" | "Twitter";
                    title?: string;
                    description?: string;
                    image?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          alternativeText?: string;
                          caption?: string;
                          width?: number;
                          height?: number;
                          formats?: any;
                          hash?: string;
                          ext?: string;
                          mime?: string;
                          size?: number;
                          url?: string;
                          previewUrl?: string;
                          provider?: string;
                          provider_metadata?: any;
                          related?: { data?: { id?: string; attributes?: object }[] };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                firstname?: string;
                                lastname?: string;
                                username?: string;
                                email?: string;
                                resetPasswordToken?: string;
                                registrationToken?: string;
                                isActive?: boolean;
                                roles?: {
                                  data?: {
                                    id?: string;
                                    attributes?: {
                                      name?: string;
                                      code?: string;
                                      description?: string;
                                      users?: { data?: { id?: string; attributes?: object }[] };
                                      permissions?: {
                                        data?: {
                                          id?: string;
                                          attributes?: {
                                            action?: string;
                                            subject?: string;
                                            properties?: any;
                                            conditions?: any;
                                            role?: { data?: { id?: string; attributes?: object } };
                                            createdAt?: string;
                                            updatedAt?: string;
                                            createdBy?: { data?: { id?: string; attributes?: object } };
                                            updatedBy?: { data?: { id?: string; attributes?: object } };
                                          };
                                        }[];
                                      };
                                      createdAt?: string;
                                      updatedAt?: string;
                                      createdBy?: { data?: { id?: string; attributes?: object } };
                                      updatedBy?: { data?: { id?: string; attributes?: object } };
                                    };
                                  }[];
                                };
                                blocked?: boolean;
                                preferedLanguage?: string;
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            };
                          };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                          sitemap_exclude?: boolean;
                        };
                      };
                    };
                  }[];
                  keywords?: string;
                  metaRobots?: string;
                  structuredData?: any;
                  metaViewport?: string;
                  canonicalURL?: string;
                };
                createdAt?: string;
                updatedAt?: string;
                publishedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
                localizations?: { data?: { id?: string; attributes?: object }[] };
                locale?: string;
                sitemap_exclude?: boolean;
              };
            }[];
          };
          locale?: string;
          sitemap_exclude?: boolean;
        };
      };
      meta?: object;
    };
  }
}

export namespace Email {
  /**
   * No description
   * @tags Email
   * @name EmailCreate
   * @request POST:/email
   * @secure
   */
  export namespace EmailCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { data?: { foo?: string } };
    export type RequestHeaders = {};
    export type ResponseBody = { data?: { id?: string; attributes?: { foo?: string } }; meta?: object };
  }
  /**
   * No description
   * @tags Email
   * @name TestCreate
   * @request POST:/email/test
   * @secure
   */
  export namespace TestCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { data?: { foo?: string } };
    export type RequestHeaders = {};
    export type ResponseBody = { data?: { id?: string; attributes?: { foo?: string } }; meta?: object };
  }
  /**
   * No description
   * @tags Email
   * @name SettingsList
   * @request GET:/email/settings
   * @secure
   */
  export namespace SettingsList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = { data?: { id?: string; attributes?: { foo?: string } }; meta?: object };
  }
}

export namespace Upload {
  /**
   * No description
   * @tags Upload - file
   * @name UploadCreate
   * @request POST:/upload
   * @secure
   */
  export namespace UploadCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = {
      data?: { name?: string; hash?: string; mime?: string; size?: number; url?: string; provider?: string };
    };
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { data?: { id?: string; attributes?: object }[] };
          createdAt?: string;
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          sitemap_exclude?: boolean;
        };
      };
      meta?: object;
    };
  }
  /**
   * No description
   * @tags Upload - file
   * @name FilesCountList
   * @request GET:/upload/files/count
   * @secure
   */
  export namespace FilesCountList {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { data?: { id?: string; attributes?: object }[] };
          createdAt?: string;
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          sitemap_exclude?: boolean;
        };
      };
      meta?: object;
    };
  }
  /**
   * No description
   * @tags Upload - file
   * @name FilesList
   * @request GET:/upload/files
   * @secure
   */
  export namespace FilesList {
    export type RequestParams = {};
    export type RequestQuery = {
      sort?: string;
      "pagination[withCount]"?: boolean;
      "pagination[page]"?: number;
      "pagination[pageSize]"?: number;
      "pagination[start]"?: number;
      "pagination[limit]"?: number;
      fields?: string;
      populate?: string;
    };
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { data?: { id?: string; attributes?: object }[] };
          createdAt?: string;
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          sitemap_exclude?: boolean;
        };
      }[];
      meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
    };
  }
  /**
   * No description
   * @tags Upload - file
   * @name FilesDetail
   * @request GET:/upload/files/{id}
   * @secure
   */
  export namespace FilesDetail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = {
      data?: {
        id?: string;
        attributes?: {
          name?: string;
          alternativeText?: string;
          caption?: string;
          width?: number;
          height?: number;
          formats?: any;
          hash?: string;
          ext?: string;
          mime?: string;
          size?: number;
          url?: string;
          previewUrl?: string;
          provider?: string;
          provider_metadata?: any;
          related?: { data?: { id?: string; attributes?: object }[] };
          createdAt?: string;
          updatedAt?: string;
          createdBy?: {
            data?: {
              id?: string;
              attributes?: {
                firstname?: string;
                lastname?: string;
                username?: string;
                email?: string;
                resetPasswordToken?: string;
                registrationToken?: string;
                isActive?: boolean;
                roles?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      code?: string;
                      description?: string;
                      users?: { data?: { id?: string; attributes?: object }[] };
                      permissions?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            action?: string;
                            subject?: string;
                            properties?: any;
                            conditions?: any;
                            role?: { data?: { id?: string; attributes?: object } };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        }[];
                      };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: { data?: { id?: string; attributes?: object } };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                    };
                  }[];
                };
                blocked?: boolean;
                preferedLanguage?: string;
                createdAt?: string;
                updatedAt?: string;
                createdBy?: { data?: { id?: string; attributes?: object } };
                updatedBy?: { data?: { id?: string; attributes?: object } };
              };
            };
          };
          updatedBy?: { data?: { id?: string; attributes?: object } };
          sitemap_exclude?: boolean;
        };
      };
      meta?: object;
    };
  }
  /**
   * No description
   * @tags Upload - file
   * @name FilesDelete
   * @request DELETE:/upload/files/{id}
   * @secure
   */
  export namespace FilesDelete {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = any;
    export type RequestHeaders = {};
    export type ResponseBody = number;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "http://localhost:1337/api" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title DOCUMENTATION
 * @version 1.0.0
 * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService YOUR_TERMS_OF_SERVICE_URL
 * @baseUrl http://localhost:1337/api
 * @externalDocs https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html
 * @contact TEAM <contact-email@something.io> (mywebsite.io)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  pageHome = {
    /**
     * No description
     *
     * @tags Page-home
     * @name PageHomeList
     * @request GET:/page-home
     * @secure
     */
    pageHomeList: (
      data: any,
      query?: {
        sort?: string;
        "pagination[withCount]"?: boolean;
        "pagination[page]"?: number;
        "pagination[pageSize]"?: number;
        "pagination[start]"?: number;
        "pagination[limit]"?: number;
        fields?: string;
        populate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              h1?: string;
              seo?: {
                id?: string;
                metaTitle?: string;
                metaDescription?: string;
                metaImage?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: { data?: { id?: string; attributes?: object }[] };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: string;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: { data?: { id?: string; attributes?: object }[] };
                                  permissions?: {
                                    data?: {
                                      id?: string;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: { data?: { id?: string; attributes?: object } };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                      };
                                    }[];
                                  };
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        };
                      };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                metaSocial?: {
                  id?: string;
                  socialNetwork?: "Facebook" | "Twitter";
                  title?: string;
                  description?: string;
                  image?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              firstname?: string;
                              lastname?: string;
                              username?: string;
                              email?: string;
                              resetPasswordToken?: string;
                              registrationToken?: string;
                              isActive?: boolean;
                              roles?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: { data?: { id?: string; attributes?: object }[] };
                                    permissions?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          action?: string;
                                          subject?: string;
                                          properties?: any;
                                          conditions?: any;
                                          role?: { data?: { id?: string; attributes?: object } };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              blocked?: boolean;
                              preferedLanguage?: string;
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                }[];
                keywords?: string;
                metaRobots?: string;
                structuredData?: any;
                metaViewport?: string;
                canonicalURL?: string;
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              localizations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    h1?: string;
                    seo?: {
                      id?: string;
                      metaTitle?: string;
                      metaDescription?: string;
                      metaImage?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: { data?: { id?: string; attributes?: object }[] };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: string;
                                attributes?: {
                                  firstname?: string;
                                  lastname?: string;
                                  username?: string;
                                  email?: string;
                                  resetPasswordToken?: string;
                                  registrationToken?: string;
                                  isActive?: boolean;
                                  roles?: {
                                    data?: {
                                      id?: string;
                                      attributes?: {
                                        name?: string;
                                        code?: string;
                                        description?: string;
                                        users?: { data?: { id?: string; attributes?: object }[] };
                                        permissions?: {
                                          data?: {
                                            id?: string;
                                            attributes?: {
                                              action?: string;
                                              subject?: string;
                                              properties?: any;
                                              conditions?: any;
                                              role?: { data?: { id?: string; attributes?: object } };
                                              createdAt?: string;
                                              updatedAt?: string;
                                              createdBy?: { data?: { id?: string; attributes?: object } };
                                              updatedBy?: { data?: { id?: string; attributes?: object } };
                                            };
                                          }[];
                                        };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                      };
                                    }[];
                                  };
                                  blocked?: boolean;
                                  preferedLanguage?: string;
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                              };
                            };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                            sitemap_exclude?: boolean;
                          };
                        };
                      };
                      metaSocial?: {
                        id?: string;
                        socialNetwork?: "Facebook" | "Twitter";
                        title?: string;
                        description?: string;
                        image?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              alternativeText?: string;
                              caption?: string;
                              width?: number;
                              height?: number;
                              formats?: any;
                              hash?: string;
                              ext?: string;
                              mime?: string;
                              size?: number;
                              url?: string;
                              previewUrl?: string;
                              provider?: string;
                              provider_metadata?: any;
                              related?: { data?: { id?: string; attributes?: object }[] };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    firstname?: string;
                                    lastname?: string;
                                    username?: string;
                                    email?: string;
                                    resetPasswordToken?: string;
                                    registrationToken?: string;
                                    isActive?: boolean;
                                    roles?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          name?: string;
                                          code?: string;
                                          description?: string;
                                          users?: { data?: { id?: string; attributes?: object }[] };
                                          permissions?: {
                                            data?: {
                                              id?: string;
                                              attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: { data?: { id?: string; attributes?: object } };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: { data?: { id?: string; attributes?: object } };
                                                updatedBy?: { data?: { id?: string; attributes?: object } };
                                              };
                                            }[];
                                          };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    blocked?: boolean;
                                    preferedLanguage?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                };
                              };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                              sitemap_exclude?: boolean;
                            };
                          };
                        };
                      }[];
                      keywords?: string;
                      metaRobots?: string;
                      structuredData?: any;
                      metaViewport?: string;
                      canonicalURL?: string;
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                    localizations?: { data?: { id?: string; attributes?: object }[] };
                    locale?: string;
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          }[];
          meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/page-home`,
        method: "GET",
        query: query,
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page-home
     * @name PageHomeUpdate
     * @request PUT:/page-home
     * @secure
     */
    pageHomeUpdate: (
      data: {
        data?: {
          h1?: string;
          seo?: {
            metaTitle?: string;
            metaDescription?: string;
            metaImage?: number | string;
            metaSocial?: {
              socialNetwork?: "Facebook" | "Twitter";
              title?: string;
              description?: string;
              image?: number | string;
            }[];
            keywords?: string;
            metaRobots?: string;
            structuredData?: any;
            metaViewport?: string;
            canonicalURL?: string;
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: number | string;
          updatedBy?: number | string;
          localizations?: (number | string)[];
          locale?: string;
          sitemap_exclude?: boolean;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              h1?: string;
              seo?: {
                id?: string;
                metaTitle?: string;
                metaDescription?: string;
                metaImage?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: { data?: { id?: string; attributes?: object }[] };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: string;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: { data?: { id?: string; attributes?: object }[] };
                                  permissions?: {
                                    data?: {
                                      id?: string;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: { data?: { id?: string; attributes?: object } };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                      };
                                    }[];
                                  };
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        };
                      };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                metaSocial?: {
                  id?: string;
                  socialNetwork?: "Facebook" | "Twitter";
                  title?: string;
                  description?: string;
                  image?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              firstname?: string;
                              lastname?: string;
                              username?: string;
                              email?: string;
                              resetPasswordToken?: string;
                              registrationToken?: string;
                              isActive?: boolean;
                              roles?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: { data?: { id?: string; attributes?: object }[] };
                                    permissions?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          action?: string;
                                          subject?: string;
                                          properties?: any;
                                          conditions?: any;
                                          role?: { data?: { id?: string; attributes?: object } };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              blocked?: boolean;
                              preferedLanguage?: string;
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                }[];
                keywords?: string;
                metaRobots?: string;
                structuredData?: any;
                metaViewport?: string;
                canonicalURL?: string;
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              localizations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    h1?: string;
                    seo?: {
                      id?: string;
                      metaTitle?: string;
                      metaDescription?: string;
                      metaImage?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: { data?: { id?: string; attributes?: object }[] };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: string;
                                attributes?: {
                                  firstname?: string;
                                  lastname?: string;
                                  username?: string;
                                  email?: string;
                                  resetPasswordToken?: string;
                                  registrationToken?: string;
                                  isActive?: boolean;
                                  roles?: {
                                    data?: {
                                      id?: string;
                                      attributes?: {
                                        name?: string;
                                        code?: string;
                                        description?: string;
                                        users?: { data?: { id?: string; attributes?: object }[] };
                                        permissions?: {
                                          data?: {
                                            id?: string;
                                            attributes?: {
                                              action?: string;
                                              subject?: string;
                                              properties?: any;
                                              conditions?: any;
                                              role?: { data?: { id?: string; attributes?: object } };
                                              createdAt?: string;
                                              updatedAt?: string;
                                              createdBy?: { data?: { id?: string; attributes?: object } };
                                              updatedBy?: { data?: { id?: string; attributes?: object } };
                                            };
                                          }[];
                                        };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                      };
                                    }[];
                                  };
                                  blocked?: boolean;
                                  preferedLanguage?: string;
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                              };
                            };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                            sitemap_exclude?: boolean;
                          };
                        };
                      };
                      metaSocial?: {
                        id?: string;
                        socialNetwork?: "Facebook" | "Twitter";
                        title?: string;
                        description?: string;
                        image?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              alternativeText?: string;
                              caption?: string;
                              width?: number;
                              height?: number;
                              formats?: any;
                              hash?: string;
                              ext?: string;
                              mime?: string;
                              size?: number;
                              url?: string;
                              previewUrl?: string;
                              provider?: string;
                              provider_metadata?: any;
                              related?: { data?: { id?: string; attributes?: object }[] };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    firstname?: string;
                                    lastname?: string;
                                    username?: string;
                                    email?: string;
                                    resetPasswordToken?: string;
                                    registrationToken?: string;
                                    isActive?: boolean;
                                    roles?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          name?: string;
                                          code?: string;
                                          description?: string;
                                          users?: { data?: { id?: string; attributes?: object }[] };
                                          permissions?: {
                                            data?: {
                                              id?: string;
                                              attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: { data?: { id?: string; attributes?: object } };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: { data?: { id?: string; attributes?: object } };
                                                updatedBy?: { data?: { id?: string; attributes?: object } };
                                              };
                                            }[];
                                          };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    blocked?: boolean;
                                    preferedLanguage?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                };
                              };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                              sitemap_exclude?: boolean;
                            };
                          };
                        };
                      }[];
                      keywords?: string;
                      metaRobots?: string;
                      structuredData?: any;
                      metaViewport?: string;
                      canonicalURL?: string;
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                    localizations?: { data?: { id?: string; attributes?: object }[] };
                    locale?: string;
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/page-home`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page-home
     * @name PageHomeDelete
     * @request DELETE:/page-home
     * @secure
     */
    pageHomeDelete: (data: any, params: RequestParams = {}) =>
      this.request<number, { error: { status?: number; name?: string; message?: string } }>({
        path: `/page-home`,
        method: "DELETE",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Page-home
     * @name LocalizationsCreate
     * @request POST:/page-home/localizations
     * @secure
     */
    localizationsCreate: (
      data: {
        data?: {
          h1?: string;
          seo?: {
            metaTitle?: string;
            metaDescription?: string;
            metaImage?: number | string;
            metaSocial?: {
              socialNetwork?: "Facebook" | "Twitter";
              title?: string;
              description?: string;
              image?: number | string;
            }[];
            keywords?: string;
            metaRobots?: string;
            structuredData?: any;
            metaViewport?: string;
            canonicalURL?: string;
          };
          createdAt?: string;
          updatedAt?: string;
          publishedAt?: string;
          createdBy?: number | string;
          updatedBy?: number | string;
          localizations?: (number | string)[];
          locale?: string;
          sitemap_exclude?: boolean;
        };
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              h1?: string;
              seo?: {
                id?: string;
                metaTitle?: string;
                metaDescription?: string;
                metaImage?: {
                  data?: {
                    id?: string;
                    attributes?: {
                      name?: string;
                      alternativeText?: string;
                      caption?: string;
                      width?: number;
                      height?: number;
                      formats?: any;
                      hash?: string;
                      ext?: string;
                      mime?: string;
                      size?: number;
                      url?: string;
                      previewUrl?: string;
                      provider?: string;
                      provider_metadata?: any;
                      related?: { data?: { id?: string; attributes?: object }[] };
                      createdAt?: string;
                      updatedAt?: string;
                      createdBy?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            firstname?: string;
                            lastname?: string;
                            username?: string;
                            email?: string;
                            resetPasswordToken?: string;
                            registrationToken?: string;
                            isActive?: boolean;
                            roles?: {
                              data?: {
                                id?: string;
                                attributes?: {
                                  name?: string;
                                  code?: string;
                                  description?: string;
                                  users?: { data?: { id?: string; attributes?: object }[] };
                                  permissions?: {
                                    data?: {
                                      id?: string;
                                      attributes?: {
                                        action?: string;
                                        subject?: string;
                                        properties?: any;
                                        conditions?: any;
                                        role?: { data?: { id?: string; attributes?: object } };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                      };
                                    }[];
                                  };
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                              }[];
                            };
                            blocked?: boolean;
                            preferedLanguage?: string;
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: { data?: { id?: string; attributes?: object } };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                          };
                        };
                      };
                      updatedBy?: { data?: { id?: string; attributes?: object } };
                      sitemap_exclude?: boolean;
                    };
                  };
                };
                metaSocial?: {
                  id?: string;
                  socialNetwork?: "Facebook" | "Twitter";
                  title?: string;
                  description?: string;
                  image?: {
                    data?: {
                      id?: string;
                      attributes?: {
                        name?: string;
                        alternativeText?: string;
                        caption?: string;
                        width?: number;
                        height?: number;
                        formats?: any;
                        hash?: string;
                        ext?: string;
                        mime?: string;
                        size?: number;
                        url?: string;
                        previewUrl?: string;
                        provider?: string;
                        provider_metadata?: any;
                        related?: { data?: { id?: string; attributes?: object }[] };
                        createdAt?: string;
                        updatedAt?: string;
                        createdBy?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              firstname?: string;
                              lastname?: string;
                              username?: string;
                              email?: string;
                              resetPasswordToken?: string;
                              registrationToken?: string;
                              isActive?: boolean;
                              roles?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    name?: string;
                                    code?: string;
                                    description?: string;
                                    users?: { data?: { id?: string; attributes?: object }[] };
                                    permissions?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          action?: string;
                                          subject?: string;
                                          properties?: any;
                                          conditions?: any;
                                          role?: { data?: { id?: string; attributes?: object } };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                }[];
                              };
                              blocked?: boolean;
                              preferedLanguage?: string;
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: { data?: { id?: string; attributes?: object } };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                            };
                          };
                        };
                        updatedBy?: { data?: { id?: string; attributes?: object } };
                        sitemap_exclude?: boolean;
                      };
                    };
                  };
                }[];
                keywords?: string;
                metaRobots?: string;
                structuredData?: any;
                metaViewport?: string;
                canonicalURL?: string;
              };
              createdAt?: string;
              updatedAt?: string;
              publishedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              localizations?: {
                data?: {
                  id?: string;
                  attributes?: {
                    h1?: string;
                    seo?: {
                      id?: string;
                      metaTitle?: string;
                      metaDescription?: string;
                      metaImage?: {
                        data?: {
                          id?: string;
                          attributes?: {
                            name?: string;
                            alternativeText?: string;
                            caption?: string;
                            width?: number;
                            height?: number;
                            formats?: any;
                            hash?: string;
                            ext?: string;
                            mime?: string;
                            size?: number;
                            url?: string;
                            previewUrl?: string;
                            provider?: string;
                            provider_metadata?: any;
                            related?: { data?: { id?: string; attributes?: object }[] };
                            createdAt?: string;
                            updatedAt?: string;
                            createdBy?: {
                              data?: {
                                id?: string;
                                attributes?: {
                                  firstname?: string;
                                  lastname?: string;
                                  username?: string;
                                  email?: string;
                                  resetPasswordToken?: string;
                                  registrationToken?: string;
                                  isActive?: boolean;
                                  roles?: {
                                    data?: {
                                      id?: string;
                                      attributes?: {
                                        name?: string;
                                        code?: string;
                                        description?: string;
                                        users?: { data?: { id?: string; attributes?: object }[] };
                                        permissions?: {
                                          data?: {
                                            id?: string;
                                            attributes?: {
                                              action?: string;
                                              subject?: string;
                                              properties?: any;
                                              conditions?: any;
                                              role?: { data?: { id?: string; attributes?: object } };
                                              createdAt?: string;
                                              updatedAt?: string;
                                              createdBy?: { data?: { id?: string; attributes?: object } };
                                              updatedBy?: { data?: { id?: string; attributes?: object } };
                                            };
                                          }[];
                                        };
                                        createdAt?: string;
                                        updatedAt?: string;
                                        createdBy?: { data?: { id?: string; attributes?: object } };
                                        updatedBy?: { data?: { id?: string; attributes?: object } };
                                      };
                                    }[];
                                  };
                                  blocked?: boolean;
                                  preferedLanguage?: string;
                                  createdAt?: string;
                                  updatedAt?: string;
                                  createdBy?: { data?: { id?: string; attributes?: object } };
                                  updatedBy?: { data?: { id?: string; attributes?: object } };
                                };
                              };
                            };
                            updatedBy?: { data?: { id?: string; attributes?: object } };
                            sitemap_exclude?: boolean;
                          };
                        };
                      };
                      metaSocial?: {
                        id?: string;
                        socialNetwork?: "Facebook" | "Twitter";
                        title?: string;
                        description?: string;
                        image?: {
                          data?: {
                            id?: string;
                            attributes?: {
                              name?: string;
                              alternativeText?: string;
                              caption?: string;
                              width?: number;
                              height?: number;
                              formats?: any;
                              hash?: string;
                              ext?: string;
                              mime?: string;
                              size?: number;
                              url?: string;
                              previewUrl?: string;
                              provider?: string;
                              provider_metadata?: any;
                              related?: { data?: { id?: string; attributes?: object }[] };
                              createdAt?: string;
                              updatedAt?: string;
                              createdBy?: {
                                data?: {
                                  id?: string;
                                  attributes?: {
                                    firstname?: string;
                                    lastname?: string;
                                    username?: string;
                                    email?: string;
                                    resetPasswordToken?: string;
                                    registrationToken?: string;
                                    isActive?: boolean;
                                    roles?: {
                                      data?: {
                                        id?: string;
                                        attributes?: {
                                          name?: string;
                                          code?: string;
                                          description?: string;
                                          users?: { data?: { id?: string; attributes?: object }[] };
                                          permissions?: {
                                            data?: {
                                              id?: string;
                                              attributes?: {
                                                action?: string;
                                                subject?: string;
                                                properties?: any;
                                                conditions?: any;
                                                role?: { data?: { id?: string; attributes?: object } };
                                                createdAt?: string;
                                                updatedAt?: string;
                                                createdBy?: { data?: { id?: string; attributes?: object } };
                                                updatedBy?: { data?: { id?: string; attributes?: object } };
                                              };
                                            }[];
                                          };
                                          createdAt?: string;
                                          updatedAt?: string;
                                          createdBy?: { data?: { id?: string; attributes?: object } };
                                          updatedBy?: { data?: { id?: string; attributes?: object } };
                                        };
                                      }[];
                                    };
                                    blocked?: boolean;
                                    preferedLanguage?: string;
                                    createdAt?: string;
                                    updatedAt?: string;
                                    createdBy?: { data?: { id?: string; attributes?: object } };
                                    updatedBy?: { data?: { id?: string; attributes?: object } };
                                  };
                                };
                              };
                              updatedBy?: { data?: { id?: string; attributes?: object } };
                              sitemap_exclude?: boolean;
                            };
                          };
                        };
                      }[];
                      keywords?: string;
                      metaRobots?: string;
                      structuredData?: any;
                      metaViewport?: string;
                      canonicalURL?: string;
                    };
                    createdAt?: string;
                    updatedAt?: string;
                    publishedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                    localizations?: { data?: { id?: string; attributes?: object }[] };
                    locale?: string;
                    sitemap_exclude?: boolean;
                  };
                }[];
              };
              locale?: string;
              sitemap_exclude?: boolean;
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/page-home/localizations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  email = {
    /**
     * No description
     *
     * @tags Email
     * @name EmailCreate
     * @request POST:/email
     * @secure
     */
    emailCreate: (data: { data?: { foo?: string } }, params: RequestParams = {}) =>
      this.request<
        { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/email`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name TestCreate
     * @request POST:/email/test
     * @secure
     */
    testCreate: (data: { data?: { foo?: string } }, params: RequestParams = {}) =>
      this.request<
        { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/email/test`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name SettingsList
     * @request GET:/email/settings
     * @secure
     */
    settingsList: (data: any, params: RequestParams = {}) =>
      this.request<
        { data?: { id?: string; attributes?: { foo?: string } }; meta?: object },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/email/settings`,
        method: "GET",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  upload = {
    /**
     * No description
     *
     * @tags Upload - file
     * @name UploadCreate
     * @request POST:/upload
     * @secure
     */
    uploadCreate: (
      data: { data?: { name?: string; hash?: string; mime?: string; size?: number; url?: string; provider?: string } },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              sitemap_exclude?: boolean;
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name FilesCountList
     * @request GET:/upload/files/count
     * @secure
     */
    filesCountList: (data: any, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              sitemap_exclude?: boolean;
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload/files/count`,
        method: "GET",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name FilesList
     * @request GET:/upload/files
     * @secure
     */
    filesList: (
      data: any,
      query?: {
        sort?: string;
        "pagination[withCount]"?: boolean;
        "pagination[page]"?: number;
        "pagination[pageSize]"?: number;
        "pagination[start]"?: number;
        "pagination[limit]"?: number;
        fields?: string;
        populate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              sitemap_exclude?: boolean;
            };
          }[];
          meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload/files`,
        method: "GET",
        query: query,
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name FilesDetail
     * @request GET:/upload/files/{id}
     * @secure
     */
    filesDetail: (id: string, data: any, params: RequestParams = {}) =>
      this.request<
        {
          data?: {
            id?: string;
            attributes?: {
              name?: string;
              alternativeText?: string;
              caption?: string;
              width?: number;
              height?: number;
              formats?: any;
              hash?: string;
              ext?: string;
              mime?: string;
              size?: number;
              url?: string;
              previewUrl?: string;
              provider?: string;
              provider_metadata?: any;
              related?: { data?: { id?: string; attributes?: object }[] };
              createdAt?: string;
              updatedAt?: string;
              createdBy?: {
                data?: {
                  id?: string;
                  attributes?: {
                    firstname?: string;
                    lastname?: string;
                    username?: string;
                    email?: string;
                    resetPasswordToken?: string;
                    registrationToken?: string;
                    isActive?: boolean;
                    roles?: {
                      data?: {
                        id?: string;
                        attributes?: {
                          name?: string;
                          code?: string;
                          description?: string;
                          users?: { data?: { id?: string; attributes?: object }[] };
                          permissions?: {
                            data?: {
                              id?: string;
                              attributes?: {
                                action?: string;
                                subject?: string;
                                properties?: any;
                                conditions?: any;
                                role?: { data?: { id?: string; attributes?: object } };
                                createdAt?: string;
                                updatedAt?: string;
                                createdBy?: { data?: { id?: string; attributes?: object } };
                                updatedBy?: { data?: { id?: string; attributes?: object } };
                              };
                            }[];
                          };
                          createdAt?: string;
                          updatedAt?: string;
                          createdBy?: { data?: { id?: string; attributes?: object } };
                          updatedBy?: { data?: { id?: string; attributes?: object } };
                        };
                      }[];
                    };
                    blocked?: boolean;
                    preferedLanguage?: string;
                    createdAt?: string;
                    updatedAt?: string;
                    createdBy?: { data?: { id?: string; attributes?: object } };
                    updatedBy?: { data?: { id?: string; attributes?: object } };
                  };
                };
              };
              updatedBy?: { data?: { id?: string; attributes?: object } };
              sitemap_exclude?: boolean;
            };
          };
          meta?: object;
        },
        { error: { status?: number; name?: string; message?: string } }
      >({
        path: `/upload/files/${id}`,
        method: "GET",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Upload - file
     * @name FilesDelete
     * @request DELETE:/upload/files/{id}
     * @secure
     */
    filesDelete: (id: string, data: any, params: RequestParams = {}) =>
      this.request<number, { error: { status?: number; name?: string; message?: string } }>({
        path: `/upload/files/${id}`,
        method: "DELETE",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
