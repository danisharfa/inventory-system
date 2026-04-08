import 'category_model.dart';

class Product {
  final int id;
  final String name;
  final String? description;
  final int price;
  final int quantity;
  final int? categoryId;
  final Category? category;

  Product({
    required this.id,
    required this.name,
    this.description,
    required this.price,
    required this.quantity,
    this.categoryId,
    this.category,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'],
      name: json['name'],
      description: json['description'],
      price: json['price'],
      quantity: json['quantity'],
      categoryId: json['categoryId'],
      category: json['category'] != null
          ? Category.fromJson(json['category'])
          : null,
    );
  }
}
