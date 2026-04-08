import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/product_detail_controller.dart';

class ProductDetailView extends GetView<ProductDetailController> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Detail Product')),
      body: Obx(() {
        if (controller.isLoading.value) {
          return Center(child: CircularProgressIndicator());
        }

        final product = controller.product.value;

        if (product == null) {
          return Center(child: Text("No data"));
        }

        return Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                product.name,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 10),
              Text('Price: Rp${product.price}', style: TextStyle(fontSize: 18)),
              Text(
                'Quantity: ${product.quantity}',
                style: TextStyle(fontSize: 18),
              ),
              SizedBox(height: 10),
              Text(
                'Category: ${product.category?.name ?? '-'}',
                style: TextStyle(fontSize: 18),
              ),
              SizedBox(height: 10),
              Text(product.description ?? '-', style: TextStyle(fontSize: 18)),
            ],
          ),
        );
      }),
    );
  }
}
