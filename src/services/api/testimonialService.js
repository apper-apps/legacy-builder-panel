import { toast } from "react-toastify";

class TestimonialService {
  constructor() {
    // Initialize ApperClient with Project ID and Public Key
    const { ApperClient } = window.ApperSDK;
    this.apperClient = new ApperClient({
      apperProjectId: import.meta.env.VITE_APPER_PROJECT_ID,
      apperPublicKey: import.meta.env.VITE_APPER_PUBLIC_KEY
    });
    this.tableName = 'testimonial_c';
  }

  async getAll() {
    try {
      const params = {
        "fields": [
          {
            "field": {
              "Name": "Name"
            }
          },
          {
            "field": {
              "Name": "Tags"
            }
          },
          {
            "field": {
              "Name": "quote_c"
            }
          },
          {
            "field": {
              "Name": "author_c"
            }
          },
          {
            "field": {
              "Name": "business_c"
            }
          },
          {
            "field": {
              "Name": "rating_c"
            }
          }
        ],
        "orderBy": [
          {
            "fieldName": "Id",
            "sorttype": "ASC"
          }
        ],
        "pagingInfo": {
          "limit": 50,
          "offset": 0
        }
      };
      
      const response = await this.apperClient.fetchRecords(this.tableName, params);
      
      // IMPORTANT: Handle top-level failure first
      if (!response.success) {
        console.error("Error fetching testimonials:", response.message);
        toast.error(response.message);
        return [];
      }
      
      // IMPORTANT: Handle empty or non-existent data
      if (!response.data || response.data.length === 0) {
        return [];
      }

      // Map database fields to UI expected format
      return response.data.map(item => ({
        Id: item.Id,
        Name: item.Name,
        Tags: item.Tags,
        quote: item.quote_c,
        author: item.author_c,
        business: item.business_c,
        rating: item.rating_c
      }));
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error("Error fetching testimonials:", error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
      } else {
        console.error("Error fetching testimonials:", error);
        toast.error("Failed to load testimonials");
      }
      return [];
    }
  }

  async getById(id) {
    try {
      const params = {
        fields: [
          {
            "field": {
              "Name": "Name"
            }
          },
          {
            "field": {
              "Name": "Tags"
            }
          },
          {
            "field": {
              "Name": "quote_c"
            }
          },
          {
            "field": {
              "Name": "author_c"
            }
          },
          {
            "field": {
              "Name": "business_c"
            }
          },
          {
            "field": {
              "Name": "rating_c"
            }
          }
        ]
      };
      
      const response = await this.apperClient.getRecordById(this.tableName, parseInt(id), params);
      
      // IMPORTANT: Handle top-level failure first
      if (!response.success) {
        console.error("Error fetching testimonial:", response.message);
        toast.error(response.message);
        return null;
      }
      
      // IMPORTANT: Handle non-existent data
      if (!response.data) {
        return null;
      }

      // Map database fields to UI expected format
      return {
        Id: response.data.Id,
        Name: response.data.Name,
        Tags: response.data.Tags,
        quote: response.data.quote_c,
        author: response.data.author_c,
        business: response.data.business_c,
        rating: response.data.rating_c
      };
    } catch (error) {
      if (error?.response?.data?.message) {
        console.error(`Error fetching testimonial with ID ${id}:`, error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
      } else {
        console.error(`Error fetching testimonial with ID ${id}:`, error);
        toast.error("Failed to load testimonial");
      }
      return null;
    }
  }
}

export default new TestimonialService();